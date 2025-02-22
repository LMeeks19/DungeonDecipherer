import { Tile } from "../Enums/Tile";
import { Combination, CombinationWheelObject } from "../Models/Combination";
import { Step } from "../Models/Step";
import { combinations } from "../Objects/combinations";
import { getTileImage } from "../Objects/tileImages";
import { getTileLocation } from "../Objects/tileLocations";

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
