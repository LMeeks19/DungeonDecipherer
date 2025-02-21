import { Tile } from "../Enums/Tile";

export interface Combination {
    firstTile: Tile
    firstTileOn: boolean;
    secondTile: Tile;
    secondTileOn: boolean;
    thirdTile: Tile;
    thirdTileOn: boolean;
    isTruth: boolean,
}

export interface CombinationWheelObject {
    left: Combination;
    right: Combination;
}