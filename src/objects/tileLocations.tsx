import { Tile, TileLocation } from "../Enums/Tile";

const tileLocations = [
  {
    tile: Tile.WITNESS,
    location: TileLocation.LEFT,
  },
  {
    tile: Tile.HIVE,
    location: TileLocation.LEFT,
  },
  {
    tile: Tile.GUARDIAN,
    location: TileLocation.LEFT,
  },
  {
    tile: Tile.PYRAMID,
    location: TileLocation.LEFT,
  },
  {
    tile: Tile.TRAVELLER,
    location: TileLocation.LEFT,
  },
  {
    tile: Tile.WORSHIP,
    location: TileLocation.MIDDLE,
  },
  {
    tile: Tile.KILL,
    location: TileLocation.MIDDLE,
  },
  {
    tile: Tile.STOP,
    location: TileLocation.MIDDLE,
  },
  {
    tile: Tile.GIVE,
    location: TileLocation.MIDDLE,
  },
  {
    tile: Tile.DRINK,
    location: TileLocation.MIDDLE,
  },
  {
    tile: Tile.WORM,
    location: TileLocation.RIGHT,
  },
  {
    tile: Tile.SAVATHÛN,
    location: TileLocation.RIGHT,
  },
  {
    tile: Tile.DARKNESS,
    location: TileLocation.RIGHT,
  },
  {
    tile: Tile.LIGHT,
    location: TileLocation.RIGHT,
  },
];

export function getTileLocation(tile: Tile): TileLocation {
  return tileLocations.find(t => t.tile === tile)!.location;
}


