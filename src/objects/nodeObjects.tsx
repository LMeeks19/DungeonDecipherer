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
