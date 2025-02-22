import { Tile, TileLocation } from "../Enums/Tile";

export interface Step {
    tile: Tile,
    image: string,
    activate: boolean,
    location: TileLocation,
}