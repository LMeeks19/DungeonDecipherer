import {
  ActiveNodes,
  isNodeActive,
} from "../Methods/SunderedDoctrineEncounterOneMethods";

// Types for node and path data
interface Position {
  x: number;
  y: number;
}

interface Node {
  id: string;
  type: "anchor" | "node" | "end";
  interact: boolean;
  position: Position;
}

interface Path {
  from: string;
  to: string;
}

// Node and Path Data
const nodes: Node[] = [
  { id: "L", type: "anchor", interact: false, position: { x: 45, y: 45 } },
  { id: "M", type: "anchor", interact: false, position: { x: 50, y: 60 } },
  { id: "R", type: "anchor", interact: false, position: { x: 55, y: 45 } },

  { id: "N1", type: "node", interact: true, position: { x: 37.5, y: 47.5 } },
  { id: "N2", type: "node", interact: false, position: { x: 27.5, y: 37.5 } },
  { id: "N3", type: "node", interact: true, position: { x: 27.5, y: 75 } },
  { id: "N4", type: "node", interact: false, position: { x: 27.5, y: 95 } },
  { id: "N5", type: "node", interact: false, position: { x: 10, y: 95 } },
  { id: "N6", type: "node", interact: false, position: { x: 27.5, y: 10 } },
  { id: "N7", type: "node", interact: true, position: { x: 5, y: 10 } },
  { id: "N8", type: "node", interact: true, position: { x: 50, y: 10 } },
  { id: "N9", type: "node", interact: false, position: { x: 72.5, y: 10 } },
  { id: "N10", type: "node", interact: true, position: { x: 90, y: 10 } },
  { id: "N11", type: "node", interact: true, position: { x: 62.5, y: 47.5 } },
  { id: "N12", type: "node", interact: true, position: { x: 70, y: 70 } },
  { id: "N13", type: "node", interact: false, position: { x: 75, y: 90 } },
  { id: "N14", type: "node", interact: true, position: { x: 90, y: 90 } },

  { id: "L1", type: "end", interact: false, position: { x: 0, y: 95 } },
  { id: "L2", type: "end", interact: false, position: { x: 5, y: 0 } },
  { id: "R1", type: "end", interact: false, position: { x: 100, y: 75 } },
  { id: "R2", type: "end", interact: false, position: { x: 95, y: 0 } },
];

const paths: Path[] = [
  { from: "L", to: "N1" },
  { from: "N1", to: "N2" },
  { from: "N2", to: "N3" },
  { from: "N3", to: "N4" },
  { from: "N4", to: "N5" },
  { from: "N5", to: "L1" },

  { from: "N1", to: "N6" },
  { from: "N6", to: "N7" },
  { from: "N7", to: "L2" },

  { from: "M", to: "N8" },
  { from: "N8", to: "N6" },

  { from: "N8", to: "N9" },
  { from: "N9", to: "N10" },
  { from: "N10", to: "R2" },

  { from: "R", to: "N11" },
  { from: "N11", to: "N9" },

  { from: "N11", to: "N12" },
  { from: "N12", to: "N13" },
  { from: "N13", to: "N14" },
  { from: "N14", to: "R1" },
];

// Function to find the shortest paths between anchors and endpoints
const findShortestPaths = (
  anchors: string[],
  endpoints: string[]
): string[] => {
  const graph: { [key: string]: string[] } = {};
  nodes.forEach((node) => (graph[node.id] = []));
  paths.forEach((path) => {
    graph[path.from].push(path.to);
  });

  const shortestPath = (start: string, end: string): string[] => {
    const queue: string[] = [start];
    const visited = new Set<string>();
    const previous: { [key: string]: string } = {};

    while (queue.length) {
      const current = queue.shift()!;
      if (current === end) break;

      graph[current].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          previous[neighbor] = current;
          queue.push(neighbor);
        }
      });
    }

    const path: string[] = [];
    for (let at = end; at; at = previous[at]) {
      path.push(at);
    }
    return path.reverse();
  };

  const allPaths: string[][] = [];
  anchors.forEach((anchor) => {
    endpoints.forEach((endpoint) => {
      allPaths.push(shortestPath(anchor, endpoint));
    });
  });

  return allPaths.flat();
};

const PathfindingComponent: React.FC<{ activeNodes: ActiveNodes }> = ({
  activeNodes,
}) => {
  function getActiveEndpoints() {
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
      activeEndpoints.push("R1");
    return activeEndpoints;
  }

  function getBackgroundColour(node: Node): string {
    if (highlightedPaths.includes(node.id) && !node.interact) return "orange";
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
    else if (highlightedPaths.includes(node.id)) return "solid orange";
    return "solid transparent";
  }

  const anchors = ["L", "M", "R"];
  const highlightedPaths = findShortestPaths(anchors, getActiveEndpoints());

  return (
    <div className="pathfinder">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="node"
          style={{
            top: `${node.position.y}%`,
            left: `${node.position.x}%`,
            transform: `translate(-${node.position.x}%, -${node.position.y}%)`,
            backgroundColor: getBackgroundColour(node),
            border: `2px ${getBorderTypeColour(node)}`,
          }}
        ></div>
      ))}
      {paths.map((path, index) => {
        const isHighlighted =
          highlightedPaths.includes(path.from) &&
          highlightedPaths.includes(path.to);
        const fromNode = nodes.find((node) => node.id === path.from)!;
        const toNode = nodes.find((node) => node.id === path.to)!;

        return (
          <svg
            key={index}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <line
              x1={`${fromNode.position.x}%`}
              y1={`${fromNode.position.y}%`}
              x2={`${toNode.position.x}%`}
              y2={`${toNode.position.y}%`}
              stroke={isHighlighted ? "orange" : " grey"}
              strokeDasharray={isHighlighted ? "" : "5 5"}
              strokeWidth={isHighlighted ? 4 : 2}
            />
          </svg>
        );
      })}
    </div>
  );
};

export default PathfindingComponent;
