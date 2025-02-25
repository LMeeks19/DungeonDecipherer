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
    graph[path.to].push(path.from); // assuming undirected paths
    path.active = false; // initialize active state to false
  });

  // Perform BFS to find the shortest path from any anchor to an active endpoint
  const bfs = (
    start: string,
    target: string,
    usedAnchors: Set<string>
  ): string[] => {
    const queue: string[][] = [[start]]; // Queue of paths
    const visited: Set<string> = new Set([start]); // Set to track visited nodes

    while (queue.length > 0) {
      const path = queue.shift()!;
      const node = path[path.length - 1];

      if (node === target) {
        return path; // Return the path if we reach the target
      }

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor) && !usedAnchors.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }

    return []; // Return an empty array if no path is found
  };

  // To track used anchors
  let usedAnchors = new Set<string>();

  // Loop through all active endpoints and find the shortest path for each endpoint
  activeEndpoints.forEach((endpoint) => {
    let bestPath: string[] = [];
    let bestLength = Infinity;

    // Find the shortest path to the endpoint, considering unused anchors
    anchors.forEach((anchor) => {
      // Skip if anchor is already in use
      if (usedAnchors.has(anchor)) return;

      const path = bfs(anchor, endpoint, usedAnchors);
      if (path.length > 0 && path.length < bestLength) {
        bestPath = path;
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
        return "blue";
      case "node":
        if (node.interact) return "#242424";
        return "grey";
      case "end":
        return "red";
    }
  }

  function getBorderTypeColour(node: Node): string {
    if (node.interact) return "dashed orange";
    else if (
      highlightedPaths.some((hp) => hp.from === node.id || hp.to === node.id)
    )
      return "solid orange";
    return "solid transparent";
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
          className="node"
          style={{
            top: node.position.y,
            left: node.position.x,
            backgroundColor: getBackgroundColour(node),
            border: `2px ${getBorderTypeColour(node)}`,
          }}
        ></div>
      ))}
      <svg className="path">
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
