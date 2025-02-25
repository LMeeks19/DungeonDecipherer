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
