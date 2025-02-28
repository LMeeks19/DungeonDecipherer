import { Tile } from "../Enums/Tile";

export interface RiddleNodes {
  leftNode: Tile;
  middleNode: Tile;
  rightNode: Tile;
}

export interface ActiveNodes {
  leftOneNode: Tile;
  leftOneNodeActive: boolean;

  rightOneNode: Tile;
  rigthOneNodeActive: boolean;

  leftTwoNode: Tile;
  leftTwoNodeActive: boolean;

  rightTwoNode: Tile;
  rightTwoNodeActive: boolean;
}

export const riddleNodes: RiddleNodes[] = [
  { leftNode: Tile.PYRAMID, middleNode: Tile.STOP, rightNode: Tile.GUARDIAN },
  { leftNode: Tile.PYRAMID, middleNode: Tile.STOP, rightNode: Tile.SAVATHÛN },
  { leftNode: Tile.PYRAMID, middleNode: Tile.GIVE, rightNode: Tile.DARKNESS },
  { leftNode: Tile.PYRAMID, middleNode: Tile.DRINK, rightNode: Tile.WORM },
  { leftNode: Tile.PYRAMID, middleNode: Tile.KILL, rightNode: Tile.WORM },
  { leftNode: Tile.GUARDIAN, middleNode: Tile.WORSHIP, rightNode: Tile.LIGHT },
  {
    leftNode: Tile.GUARDIAN,
    middleNode: Tile.WORSHIP,
    rightNode: Tile.TRAVELLER,
  },
  { leftNode: Tile.GUARDIAN, middleNode: Tile.KILL, rightNode: Tile.WITNESS },
  { leftNode: Tile.HIVE, middleNode: Tile.WORSHIP, rightNode: Tile.DARKNESS },
  { leftNode: Tile.HIVE, middleNode: Tile.WORSHIP, rightNode: Tile.WORM },
  { leftNode: Tile.TRAVELLER, middleNode: Tile.GIVE, rightNode: Tile.GUARDIAN },
  { leftNode: Tile.TRAVELLER, middleNode: Tile.GIVE, rightNode: Tile.LIGHT },
];

export function PossibleSolutions(riddle: RiddleNodes): RiddleNodes[] {
  var possibleSolutions: RiddleNodes[] = [];

  if (riddle.leftNode !== Tile.NEUTRAL) {
    if (possibleSolutions.length === 0) {
      possibleSolutions = riddleNodes.filter(
        (r) => r.leftNode === riddle.leftNode
      );
    } else {
      possibleSolutions = possibleSolutions.filter(
        (r) => r.leftNode === riddle.leftNode
      );
    }
  }
  if (riddle.middleNode !== Tile.NEUTRAL) {
    if (possibleSolutions.length === 0) {
      possibleSolutions = riddleNodes.filter(
        (r) => r.middleNode === riddle.middleNode
      );
    } else {
      possibleSolutions = possibleSolutions.filter(
        (r) => r.middleNode === riddle.middleNode
      );
    }
  }

  if (riddle.rightNode !== Tile.NEUTRAL) {
    if (possibleSolutions.length === 0) {
      possibleSolutions = riddleNodes.filter(
        (r) => r.rightNode === riddle.rightNode
      );
    } else {
      possibleSolutions = possibleSolutions.filter(
        (r) => r.rightNode === riddle.rightNode
      );
    }
  }

  return possibleSolutions;
}

export function isNodeActive(node: Tile, active: boolean): boolean {
  return node !== Tile.NEUTRAL && active;
}

export interface Node {
  id: string;
  type: "anchor" | "node" | "end";
  interact: boolean;
  position: { x: string; y: string };
}

export interface Path {
  from: string;
  to: string;
  active: boolean;
}

// Node and Path Data
export const nodes: Node[] = [
  {
    id: "L",
    type: "anchor",
    interact: false,
    position: { x: "45%", y: "47.5%" },
  },
  {
    id: "M",
    type: "anchor",
    interact: false,
    position: { x: "50%", y: "60%" },
  },
  {
    id: "R",
    type: "anchor",
    interact: false,
    position: { x: "55%", y: "47.5%" },
  },
  {
    id: "N1",
    type: "node",
    interact: true,
    position: { x: "37.5%", y: "47.5%" },
  },
  {
    id: "N2",
    type: "node",
    interact: false,
    position: { x: "27.5%", y: "37.5%" },
  },
  {
    id: "N3",
    type: "node",
    interact: true,
    position: { x: "30%", y: "72.5%" },
  },
  {
    id: "N4",
    type: "node",
    interact: false,
    position: { x: "27.5%", y: "90%" },
  },
  { id: "N5", type: "node", interact: false, position: { x: "10%", y: "90%" } },
  {
    id: "N6",
    type: "node",
    interact: false,
    position: { x: "27.5%", y: "15%" },
  },
  { id: "N7", type: "node", interact: true, position: { x: "10%", y: "15%" } },
  { id: "N8", type: "node", interact: true, position: { x: "50%", y: "15%" } },
  {
    id: "N9",
    type: "node",
    interact: false,
    position: { x: "72.5%", y: "15%" },
  },
  { id: "N10", type: "node", interact: true, position: { x: "90%", y: "15%" } },
  {
    id: "N11",
    type: "node",
    interact: true,
    position: { x: "62.5%", y: "47.5%" },
  },
  { id: "N12", type: "node", interact: true, position: { x: "65%", y: "65%" } },
  {
    id: "N13",
    type: "node",
    interact: false,
    position: { x: "70%", y: "90%" },
  },
  { id: "N14", type: "node", interact: true, position: { x: "90%", y: "90%" } },
  {
    id: "N15",
    type: "node",
    interact: true,
    position: { x: "42.5%", y: "70%" },
  },
  {
    id: "N16",
    type: "node",
    interact: true,
    position: { x: "42.5%", y: "27.5%" },
  },
  {
    id: "N17",
    type: "node",
    interact: true,
    position: { x: "57.5%", y: "27.5%" },
  },
  {
    id: "N18",
    type: "node",
    interact: true,
    position: { x: "60%", y: "60%" },
  },
  {
    id: "N19",
    type: "node",
    interact: false,
    position: { x: "70%", y: "35%" },
  },
  {
    id: "N20",
    type: "node",
    interact: false,
    position: { x: "75%", y: "30%" },
  },
  {
    id: "N21",
    type: "node",
    interact: true,
    position: { x: "90%", y: "30%" },
  },
  {
    id: "N22",
    type: "node",
    interact: true,
    position: { x: "85%", y: "65%" },
  },
  {
    id: "N23",
    type: "node",
    interact: true,
    position: { x: "90%", y: "75%" },
  },
  {
    id: "N24",
    type: "node",
    interact: true,
    position: { x: "57.5%", y: "90%" },
  },
  {
    id: "N25",
    type: "node",
    interact: true,
    position: { x: "35%", y: "62.5%" },
  },
  {
    id: "N26",
    type: "node",
    interact: false,
    position: { x: "22.5%", y: "32.5%" },
  },
  {
    id: "N27",
    type: "node",
    interact: true,
    position: { x: "10%", y: "32.5%" },
  },
  {
    id: "N28",
    type: "node",
    interact: true,
    position: { x: "10%", y: "62.5%" },
  },
  { id: "L1", type: "end", interact: false, position: { x: "2.5%", y: "90%" } },
  { id: "L2", type: "end", interact: false, position: { x: "10%", y: "5%" } },

  {
    id: "R1",
    type: "end",
    interact: false,
    position: { x: "97.5%", y: "75%" },
  },
  { id: "R2", type: "end", interact: false, position: { x: "95%", y: "5%" } },
  { id: "Riddle", type: "end", interact: false, position: {x: "50%", y: "35%"}}
];

export const paths: Path[] = [
  {
    from: "L",
    to: "N1",
    active: false,
  },
  {
    from: "L",
    to: "N16",
    active: false,
  },

  {
    from: "N1",
    to: "N2",
    active: false,
  },
  {
    from: "N1",
    to: "N6",
    active: false,
  },
  {
    from: "N1",
    to: "N16",
    active: false,
  },

  {
    from: "N2",
    to: "N3",
    active: false,
  },

  {
    from: "N2",
    to: "N3",
    active: false,
  },

  {
    from: "N3",
    to: "N4",
    active: false,
  },
  {
    from: "N3",
    to: "N25",
    active: false,
  },

  {
    from: "N4",
    to: "N5",
    active: false,
  },
  {
    from: "N5",
    to: "L1",
    active: false,
  },

  {
    from: "N6",
    to: "N7",
    active: false,
  },

  {
    from: "N7",
    to: "L2",
    active: false,
  },
  { from: "N7", to: "N27", active: false },

  {
    from: "M",
    to: "N8",
    active: false,
  },
  {
    from: "M",
    to: "N15",
    active: false,
  },

  {
    from: "N8",
    to: "N6",
    active: false,
  },
  {
    from: "N8",
    to: "N9",
    active: false,
  },

  {
    from: "N9",
    to: "N10",
    active: false,
  },

  {
    from: "N10",
    to: "R2",
    active: false,
  },
  {
    from: "N10",
    to: "N21",
    active: false,
  },
  {
    from: "N10",
    to: "N19",
    active: false,
  },
  {
    from: "R",
    to: "N11",
    active: false,
  },
  {
    from: "R",
    to: "N17",
    active: false,
  },
  {
    from: "R",
    to: "N18",
    active: false,
  },

  {
    from: "N11",
    to: "N9",
    active: false,
  },
  {
    from: "N11",
    to: "N12",
    active: false,
  },
  {
    from: "N11",
    to: "N18",
    active: false,
  },

  {
    from: "N12",
    to: "N13",
    active: false,
  },
  {
    from: "N12",
    to: "N22",
    active: false,
  },
  {
    from: "N13",
    to: "N14",
    active: false,
  },
  {
    from: "N14",
    to: "R1",
    active: false,
  },
  {
    from: "N14",
    to: "N23",
    active: false,
  },
  {
    from: "N15",
    to: "N1",
    active: false,
  },
  {
    from: "N15",
    to: "N25",
    active: false,
  },
  {
    from: "N16",
    to: "N1",
    active: false,
  },
  {
    from: "N16",
    to: "N17",
    active: false,
  },
  {
    from: "N16",
    to: "N26",
    active: false,
  },

  {
    from: "N17",
    to: "N11",
    active: false,
  },
  {
    from: "N17",
    to: "N20",
    active: false,
  },
  {
    from: "N18",
    to: "N12",
    active: false,
  },
  {
    from: "N18",
    to: "N24",
    active: false,
  },
  {
    from: "N19",
    to: "N13",
    active: false,
  },
  {
    from: "N20",
    to: "N21",
    active: false,
  },
  {
    from: "N21",
    to: "N10",
    active: false,
  },
  {
    from: "N21",
    to: "N23",
    active: false,
  },
  {
    from: "N22",
    to: "N23",
    active: false,
  },
  {
    from: "N23",
    to: "N14",
    active: false,
  },
  {
    from: "N23",
    to: "N21",
    active: false,
  },
  {
    from: "N23",
    to: "R1",
    active: false,
  },
  {
    from: "N24",
    to: "N13",
    active: false,
  },
  {
    from: "N25",
    to: "N3",
    active: false,
  },
  {
    from: "N25",
    to: "N1",
    active: false,
  },
  {
    from: "N25",
    to: "N28",
    active: false,
  },

  { from: "N26", to: "N27", active: false },

  { from: "N27", to: "N7", active: false },
  { from: "N27", to: "N28", active: false },

  { from: "N28", to: "N27", active: false },
  { from: "N28", to: "N5", active: false },
];
