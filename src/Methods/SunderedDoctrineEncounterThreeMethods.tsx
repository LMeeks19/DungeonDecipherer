import { Tile, TileLocation } from "../Enums/Tile";
import WitnessGlyph from "../Images/WitnessGlyph.jpg";
import HiveGlyph from "../Images/HiveGlyph.jpg";
import GuardianGlyph from "../Images/GuardianGlyph.jpg";
import PyramidGlyph from "../Images/PyramidGlyph.jpg";
import TravellerGlyph from "../Images/TravellerGlyph.jpg";
import DrinkGlyph from "../Images/DrinkGlyph.jpg";
import StopGlyph from "../Images/StopGlyph.jpg";
import GiveGlyph from "../Images/GiveGlyph.jpg";
import WorshipGlyph from "../Images/WorshipGlyph.jpg";
import KillGlyph from "../Images/KillGlyph.jpg";
import WormGlyph from "../Images/WormGlyph.jpg";
import SavathunGlyph from "../Images/SavathunGlyph.jpg";
import DarknessGlyph from "../Images/DarknessGlyph.jpg";
import LightGlyph from "../Images/LightGlyph.jpg";
import NeutralGlyph from "../Images/NeutralGlyph.jpg";
import { MenuItem } from "@mui/material";

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

const tileImages = [
  {
    tile: Tile.WITNESS,
    image: WitnessGlyph,
  },
  {
    tile: Tile.HIVE,
    image: HiveGlyph,
  },
  {
    tile: Tile.GUARDIAN,
    image: GuardianGlyph,
  },
  {
    tile: Tile.PYRAMID,
    image: PyramidGlyph,
  },
  {
    tile: Tile.TRAVELLER,
    image: TravellerGlyph,
  },
  {
    tile: Tile.WORSHIP,
    image: WorshipGlyph,
  },
  {
    tile: Tile.KILL,
    image: KillGlyph,
  },
  {
    tile: Tile.STOP,
    image: StopGlyph,
  },
  {
    tile: Tile.GIVE,
    image: GiveGlyph,
  },
  {
    tile: Tile.DRINK,
    image: DrinkGlyph,
  },
  {
    tile: Tile.WORM,
    image: WormGlyph,
  },
  {
    tile: Tile.SAVATHÛN,
    image: SavathunGlyph,
  },
  {
    tile: Tile.DARKNESS,
    image: DarknessGlyph,
  },
  {
    tile: Tile.LIGHT,
    image: LightGlyph,
  },
  { tile: Tile.NEUTRAL, image: NeutralGlyph },
];

export function getTileImage(tile: Tile): string {
  return tileImages.find((t) => t.tile === tile)!.image;
}

export const glyphMenuItems = Object.values(Tile).map((value) => {
  return (
    <MenuItem key={value} value={value}>
      <div className="tooltip">{value}</div>
      <img src={getTileImage(value)} alt={getTileImage(value)} />
    </MenuItem>
  );
});

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

export interface Step {
  tile: Tile,
  image: string,
  activate: boolean,
  location: TileLocation,
}

export const combinations = [
  {
    firstTile: Tile.HIVE,
    secondTile: Tile.KILL,
    thirdTile: Tile.WORM,
    isTruth: false,
  },
  {
    firstTile: Tile.HIVE,
    secondTile: Tile.STOP,
    thirdTile: Tile.WITNESS,
    isTruth: false,
  },
  {
    firstTile: Tile.HIVE,
    secondTile: Tile.GIVE,
    thirdTile: Tile.DARKNESS,
    isTruth: false,
  },
  {
    firstTile: Tile.HIVE,
    secondTile: Tile.KILL,
    thirdTile: Tile.LIGHT,
    isTruth: false,
  },
  {
    firstTile: Tile.WITNESS,
    secondTile: Tile.KILL,
    thirdTile: Tile.PYRAMID,
    isTruth: false,
  },
  {
    firstTile: Tile.WITNESS,
    secondTile: Tile.DRINK,
    thirdTile: Tile.LIGHT,
    isTruth: false,
  },
  {
    firstTile: Tile.TRAVELLER,
    secondTile: Tile.DRINK,
    thirdTile: Tile.WORM,
    isTruth: false,
  },
  {
    firstTile: Tile.TRAVELLER,
    secondTile: Tile.GIVE,
    thirdTile: Tile.HIVE,
    isTruth: false,
  },
  {
    firstTile: Tile.TRAVELLER,
    secondTile: Tile.KILL,
    thirdTile: Tile.GUARDIAN,
    isTruth: false,
  },
  {
    firstTile: Tile.TRAVELLER,
    secondTile: Tile.STOP,
    thirdTile: Tile.WITNESS,
    isTruth: false,
  },
  {
    firstTile: Tile.LIGHT,
    secondTile: Tile.STOP,
    thirdTile: Tile.SAVATHÛN,
    isTruth: false,
  },
  {
    firstTile: Tile.PYRAMID,
    secondTile: Tile.DRINK,
    thirdTile: Tile.GUARDIAN,
    isTruth: false,
  },
  {
    firstTile: Tile.PYRAMID,
    secondTile: Tile.STOP,
    thirdTile: Tile.WITNESS,
    isTruth: false,
  },
  {
    firstTile: Tile.GUARDIAN,
    secondTile: Tile.WORSHIP,
    thirdTile: Tile.WITNESS,
    isTruth: false,
  },
  {
    firstTile: Tile.GUARDIAN,
    secondTile: Tile.KILL,
    thirdTile: Tile.TRAVELLER,
    isTruth: false,
  },
  {
    firstTile: Tile.SAVATHÛN,
    secondTile: Tile.STOP,
    thirdTile: Tile.DARKNESS,
    isTruth: false,
  },
  {
    firstTile: Tile.SAVATHÛN,
    secondTile: Tile.DRINK,
    thirdTile: Tile.DARKNESS,
    isTruth: false,
  },
  {
    firstTile: Tile.PYRAMID,
    secondTile: Tile.GIVE,
    thirdTile: Tile.DARKNESS,
    isTruth: true,
  },
  {
    firstTile: Tile.PYRAMID,
    secondTile: Tile.STOP,
    thirdTile: Tile.SAVATHÛN,
    isTruth: true,
  },
  {
    firstTile: Tile.PYRAMID,
    secondTile: Tile.KILL,
    thirdTile: Tile.WORM,
    isTruth: true,
  },
  {
    firstTile: Tile.PYRAMID,
    secondTile: Tile.DRINK,
    thirdTile: Tile.WORM,
    isTruth: true,
  },
  {
    firstTile: Tile.HIVE,
    secondTile: Tile.WORSHIP,
    thirdTile: Tile.DARKNESS,
    isTruth: true,
  },
  {
    firstTile: Tile.HIVE,
    secondTile: Tile.WORSHIP,
    thirdTile: Tile.WORM,
    isTruth: true,
  },
  {
    firstTile: Tile.TRAVELLER,
    secondTile: Tile.GIVE,
    thirdTile: Tile.GUARDIAN,
    isTruth: true,
  },
  {
    firstTile: Tile.TRAVELLER,
    secondTile: Tile.GIVE,
    thirdTile: Tile.LIGHT,
    isTruth: true,
  },
  {
    firstTile: Tile.GUARDIAN,
    secondTile: Tile.KILL,
    thirdTile: Tile.WITNESS,
    isTruth: true,
  },
  {
    firstTile: Tile.GUARDIAN,
    secondTile: Tile.WORSHIP,
    thirdTile: Tile.LIGHT,
    isTruth: true,
  },
  {
    firstTile: Tile.GUARDIAN,
    secondTile: Tile.WORSHIP,
    thirdTile: Tile.TRAVELLER,
    isTruth: true,
  },
  {
    firstTile: Tile.DARKNESS,
    secondTile: Tile.STOP,
    thirdTile: Tile.SAVATHÛN,
    isTruth: true,
  },
] as Combination[];

export function isValidCombination(combination: Combination): boolean {
  return combinations.some(
    (c) =>
      c.firstTile === combination.firstTile &&
      c.secondTile === combination.secondTile &&
      c.thirdTile === combination.thirdTile
  );
}

export function CalculateSolution(
  combinationWheelObject: CombinationWheelObject
): CombinationWheelObject {
  if (
    !isValidCombination(combinationWheelObject.left) ||
    !isValidCombination(combinationWheelObject.right)
  )
    return {
      left: {
        firstTile: Tile.NEUTRAL,
        secondTile: Tile.NEUTRAL,
        thirdTile: Tile.NEUTRAL,
        isTruth: true,
      },
      right: {
        firstTile: Tile.NEUTRAL,
        secondTile: Tile.NEUTRAL,
        thirdTile: Tile.NEUTRAL,
        isTruth: true,
      },
    } as CombinationWheelObject;

  var leftCombination = combinations.find(
    (c) =>
      c.firstTile === combinationWheelObject.left.firstTile &&
      c.secondTile === combinationWheelObject.left.secondTile &&
      c.thirdTile === combinationWheelObject.left.thirdTile
  );

  var rightCombination = combinations.find(
    (c) =>
      c.firstTile === combinationWheelObject.right.firstTile &&
      c.secondTile === combinationWheelObject.right.secondTile &&
      c.thirdTile === combinationWheelObject.right.thirdTile
  );

  if (leftCombination!.isTruth === rightCombination!.isTruth)
    return {
      left: {
        firstTile: Tile.NEUTRAL,
        secondTile: Tile.NEUTRAL,
        thirdTile: Tile.NEUTRAL,
        isTruth: true,
      },
      right: {
        firstTile: Tile.NEUTRAL,
        secondTile: Tile.NEUTRAL,
        thirdTile: Tile.NEUTRAL,
        isTruth: true,
      },
    } as CombinationWheelObject;

  return {
    left: leftCombination,
    right: rightCombination,
  } as CombinationWheelObject;
}

export function CalculateSteps(
  combinationWheelObject: CombinationWheelObject,
  solutionWheelObject: CombinationWheelObject
): Step[] {
  var steps = [] as Step[];

  CalculateTileStep(
    combinationWheelObject.left.firstTileOn,
    "LEFT",
    combinationWheelObject.left.firstTile,
    solutionWheelObject,
    steps
  );

  CalculateTileStep(
    combinationWheelObject.left.secondTileOn,
    "LEFT",
    combinationWheelObject.left.secondTile,
    solutionWheelObject,
    steps
  );

  CalculateTileStep(
    combinationWheelObject.left.thirdTileOn,
    "LEFT",
    combinationWheelObject.left.thirdTile,
    solutionWheelObject,
    steps
  );

  CalculateTileStep(
    combinationWheelObject.right.firstTileOn,
    "RIGHT",
    combinationWheelObject.right.firstTile,
    solutionWheelObject,
    steps
  );

  CalculateTileStep(
    combinationWheelObject.right.secondTileOn,
    "RIGHT",
    combinationWheelObject.right.secondTile,
    solutionWheelObject,
    steps
  );

  CalculateTileStep(
    combinationWheelObject.right.thirdTileOn,
    "RIGHT",
    combinationWheelObject.right.thirdTile,
    solutionWheelObject,
    steps
  );

  return steps;
}

function CalculateTileStep(
  isTileOn: boolean,
  tileSide: "LEFT" | "RIGHT",
  tile: Tile,
  solution: CombinationWheelObject,
  steps: Step[]
) {
  if (isTileOn && solution.left.isTruth && tileSide === "LEFT") {
    steps.push({
      tile: tile,
      activate: false,
      image: getTileImage(tile),
      location: getTileLocation(tile),
    });
  }
  if (!isTileOn && solution.right.isTruth && tileSide === "LEFT") {
    steps.push({
      tile: tile,
      activate: true,
      image: getTileImage(tile),
      location: getTileLocation(tile),
    });
  }

  if (!isTileOn && solution.left.isTruth && tileSide === "RIGHT") {
    steps.push({
      tile: tile,
      activate: true,
      image: getTileImage(tile),
      location: getTileLocation(tile),
    });
  }
  if (isTileOn && solution.right.isTruth && tileSide === "RIGHT") {
    steps.push({
      tile: tile,
      activate: false,
      image: getTileImage(tile),
      location: getTileLocation(tile),
    });
  }
}
