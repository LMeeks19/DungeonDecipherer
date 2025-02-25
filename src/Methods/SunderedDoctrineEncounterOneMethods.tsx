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
    position: { x: "45%", y: "45%" },
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
    position: { x: "55%", y: "45%" },
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
    position: { x: "27.5%", y: "75%" },
  },
  {
    id: "N4",
    type: "node",
    interact: false,
    position: { x: "27.5%", y: "95%" },
  },
  { id: "N5", type: "node", interact: false, position: { x: "10%", y: "95%" } },
  {
    id: "N6",
    type: "node",
    interact: false,
    position: { x: "27.5%", y: "10%" },
  },
  { id: "N7", type: "node", interact: true, position: { x: "5%", y: "10%" } },
  { id: "N8", type: "node", interact: true, position: { x: "50%", y: "10%" } },
  {
    id: "N9",
    type: "node",
    interact: false,
    position: { x: "72.5%", y: "10%" },
  },
  { id: "N10", type: "node", interact: true, position: { x: "90%", y: "10%" } },
  {
    id: "N11",
    type: "node",
    interact: true,
    position: { x: "62.5%", y: "47.5%" },
  },
  { id: "N12", type: "node", interact: true, position: { x: "70%", y: "70%" } },
  {
    id: "N13",
    type: "node",
    interact: false,
    position: { x: "75%", y: "90%" },
  },
  { id: "N14", type: "node", interact: true, position: { x: "90%", y: "90%" } },

  { id: "L1", type: "end", interact: false, position: { x: "2.5%", y: "95%" } },
  { id: "L2", type: "end", interact: false, position: { x: "5%", y: "2.5%" } },

  {
    id: "R1",
    type: "end",
    interact: false,
    position: { x: "97.5%", y: "75%" },
  },
  { id: "R2", type: "end", interact: false, position: { x: "95%", y: "2.5%" } },
];

export const paths: Path[] = [
  {
    from: "L",
    to: "N1",
    active: false,
  },
  {
    from: "N1",
    to: "N2",
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
    from: "N1",
    to: "N6",
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

  {
    from: "M",
    to: "N8",
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
    from: "R",
    to: "N11",
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
    from: "N12",
    to: "N13",
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
];
