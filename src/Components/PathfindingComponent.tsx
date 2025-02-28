import {
  ActiveNodes,
  isNodeActive,
  nodes,
  Path,
  paths,
  Node,
} from "../Methods/SunderedDoctrineEncounterOneMethods";

const findShortestPaths = (
  anchors: string[],
  activeEndpoints: string[]
): Path[] => {
  // Create a graph of all nodes and paths
  const graph: { [key: string]: string[] } = {};

  // Initialize graph with all nodes and empty paths
  nodes.forEach((node) => {
    graph[node.id] = [];
  });

  // Populate graph with paths
  paths.forEach((path) => {
    graph[path.from].push(path.to);
    path.active = false; // initialize active state to false
  });

  // Perform BFS to find the shortest path with minimum "interact: true" nodes
  const bfs = (
    start: string,
    target: string,
    usedAnchors: Set<string>
  ): { path: string[]; interactCount: number } => {
    const queue: { path: string[]; interactCount: number }[] = [
      {
        path: [start],
        interactCount: nodes.find((n) => n.id === start)?.interact ? 1 : 0,
      },
    ]; // Queue of paths with interact count
    const visited: Set<string> = new Set([start]); // Set to track visited nodes

    while (queue.length > 0) {
      const { path, interactCount } = queue.shift()!;
      const node = path[path.length - 1];

      if (node === target) {
        return { path, interactCount }; // Return the path if we reach the target
      }

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor) && !usedAnchors.has(neighbor)) {
          visited.add(neighbor);

          // Calculate interact count for this neighbor
          const isInteract = nodes.find((n) => n.id === neighbor)?.interact
            ? 1
            : 0;
          queue.push({
            path: [...path, neighbor],
            interactCount: interactCount + isInteract,
          });
        }
      }
    }

    return { path: [], interactCount: Infinity }; // Return an empty result if no path is found
  };

  // To track used anchors
  let usedAnchors = new Set<string>();

  // Loop through all active endpoints and find the best path for each endpoint
  activeEndpoints.forEach((endpoint) => {
    let bestPath: string[] = [];
    let bestInteractCount = Infinity;
    let bestLength = Infinity;

    // Find the best path to the endpoint, considering unused anchors
    anchors.forEach((anchor) => {
      // Skip if anchor is already in use
      if (usedAnchors.has(anchor)) return;

      const { path, interactCount } = bfs(anchor, endpoint, usedAnchors);
      if (
        path.length > 0 &&
        (interactCount < bestInteractCount || // Prioritize fewer interact nodes
          (interactCount === bestInteractCount && path.length < bestLength)) // Fallback to shorter length
      ) {
        bestPath = path;
        bestInteractCount = interactCount;
        bestLength = path.length;
      }
    });

    // Mark all paths in the best path as active
    if (bestPath.length > 0) {
      bestPath.forEach((node, index) => {
        // Find and mark the corresponding path as active
        const fromNode = bestPath[index];
        const toNode = bestPath[index + 1];
        if (fromNode && toNode) {
          const path = paths.find(
            (p) =>
              (p.from === fromNode && p.to === toNode) ||
              (p.from === toNode && p.to === fromNode)
          );
          if (path) {
            path.active = true;
          }
        }
      });

      // Mark the best anchor as used for this endpoint
      const anchorUsed = bestPath[0]; // The first node in the path is the anchor
      usedAnchors.add(anchorUsed);
    }
  });

  // Return the list of active paths
  return paths.filter((path) => path.active);
};

const PathfindingComponent: React.FC<{ activeNodes: ActiveNodes }> = ({
  activeNodes,
}) => {
  function getBackgroundColour(node: Node): string {
    if (
      highlightedPaths.some((hp) => hp.from === node.id || hp.to === node.id) &&
      !node.interact
    )
      return "orange";
    switch (node.type) {
      case "anchor":
        return "rgb(0, 128, 255)";
      case "node":
        if (node.interact) return "#242424";
        return "rgb(255, 119, 0)";
      case "end":
        return "#242424";
    }
  }

  function getBorderType(node: Node): string {
    if (node.interact) return "dashed";
    return "solid";
  }

  function getBorderColour(node: Node): string {
    if (highlightedPaths.some((hp) => hp.from === node.id || hp.to === node.id))
      return "orange";
    switch (node.type) {
      case "anchor":
        return "rgb(0, 128, 255)";
      case "node":
        return "rgb(255, 119, 0)";
      case "end":
        return "grey";
    }
  }

  const getActiveEndpoints = () => {
    const activeEndpoints: string[] = [];
    if (
      isNodeActive(activeNodes.leftOneNode, activeNodes.leftOneNodeActive) &&
      activeEndpoints.length < 4
    )
      activeEndpoints.push("L1");
    if (
      isNodeActive(activeNodes.leftTwoNode, activeNodes.leftTwoNodeActive) &&
      activeEndpoints.length < 4
    )
      activeEndpoints.push("L2");
    if (
      isNodeActive(activeNodes.rightOneNode, activeNodes.rigthOneNodeActive) &&
      activeEndpoints.length < 4
    )
      activeEndpoints.push("R1");
    if (
      isNodeActive(activeNodes.rightTwoNode, activeNodes.rightTwoNodeActive) &&
      activeEndpoints.length < 4
    )
      activeEndpoints.push("R2");
    return activeEndpoints;
  };

  const anchors = ["L", "M", "R"];
  const activeEndpoints = getActiveEndpoints();
  const highlightedPaths = findShortestPaths(anchors, activeEndpoints);

  return (
    <div className="pathfinder">
      {nodes.map((node) => (
        <div
          key={node.id}
          className={`node ${node.type === "end" && "end"} ${
            (node.id === "L1" || node.id === "R1") && "vertical"
          }`}
          style={{
            top: node.position.y,
            left: node.position.x,
            backgroundColor: getBackgroundColour(node),
            border: `2px ${getBorderType(node)} ${getBorderColour(node)}`,
          }}
        >
          {node.type !== "node" && node.id}
        </div>
      ))}
      <svg className="paths">
        {paths.map((path, index) => {
          const fromNode = nodes.find((node) => node.id === path.from)!;
          const toNode = nodes.find((node) => node.id === path.to)!;

          return (
            <line
              key={index}
              x1={fromNode.position.x}
              y1={fromNode.position.y}
              x2={toNode.position.x}
              y2={toNode.position.y}
              stroke={path.active ? "orange" : "grey"}
              strokeDasharray={path.active ? "" : "2.5 2.5"}
              strokeWidth={path.active ? 4 : 2}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PathfindingComponent;
