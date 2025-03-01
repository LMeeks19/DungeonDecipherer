import "./EncounterThree.css";
import { Tooltip, Checkbox, Select } from "@mui/material";
import { useState, useEffect } from "react";
import { Tile, TileLocation } from "../../Enums/Tile";
import {
  CalculateSolution,
  CalculateSteps,
  CombinationWheelObject,
  encounterThreeGlyphMenuItems,
  isValidCombination,
} from "../../Methods/SunderedDoctrineEncounterThreeMethods";
import { Step } from "../../Methods/SunderedDoctrineEncounterThreeMethods";
import Base from "../Base";

function SunderedDoctrineEncounterThree() {
  const [selectedGlyphs, setSelectedGlyphs] = useState<CombinationWheelObject>({
    left: {
      firstTile: Tile.NEUTRAL,
      secondTile: Tile.NEUTRAL,
      thirdTile: Tile.NEUTRAL,
    },
    right: {
      firstTile: Tile.NEUTRAL,
      secondTile: Tile.NEUTRAL,
      thirdTile: Tile.NEUTRAL,
    },
  } as CombinationWheelObject);
  const [solutionGlyphs, setSolutionGlyphs] = useState<CombinationWheelObject>({
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
  } as CombinationWheelObject);
  const [solutionSteps, setSolutionSteps] = useState<Step[]>([] as Step[]);

  useEffect(() => {
    var solution = CalculateSolution(selectedGlyphs);
    setSolutionGlyphs(solution);

    if (isValidCombination(solution.left) && isValidCombination(solution.right))
      setSolutionSteps(CalculateSteps(selectedGlyphs, solution));
    else setSolutionSteps([]);
  }, [selectedGlyphs]);

  function resetEncounter() {
    setSelectedGlyphs({
      left: {
        firstTile: Tile.NEUTRAL,
        secondTile: Tile.NEUTRAL,
        thirdTile: Tile.NEUTRAL,
      },
      right: {
        firstTile: Tile.NEUTRAL,
        secondTile: Tile.NEUTRAL,
        thirdTile: Tile.NEUTRAL,
      },
    } as CombinationWheelObject);
  }

  return (
    <div className="sundered-doctrine-encounter-three">
      <div className="encounter-three">
        <Base
          title="Sundered Doctrine: Isolate Preservation"
          reset={resetEncounter}
        />
        <div className="content">
          <div className="encounter-grid">
            <div className="input-box">
              <div className="glyph">
                {selectedGlyphs.left.firstTileOn && <div className="active" />}
                <Checkbox
                  checked={!!selectedGlyphs.left.firstTileOn}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        firstTileOn: e.target.checked,
                      },
                    })
                  }
                />
                <Select
                  value={selectedGlyphs.left.firstTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        firstTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {selectedGlyphs.right.firstTileOn && <div className="active" />}
                <Checkbox
                  checked={!!selectedGlyphs.right.firstTileOn}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        firstTileOn: e.target.checked,
                      },
                    })
                  }
                  sx={{
                    position: "absolute !important",
                    zIndex: 999,
                    top: 0,
                    right: 0,
                  }}
                />
                <Select
                  value={selectedGlyphs.right.firstTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        firstTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {selectedGlyphs.left.secondTileOn && <div className="active" />}
                <Checkbox
                  checked={!!selectedGlyphs.left.secondTileOn}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        secondTileOn: e.target.checked,
                      },
                    })
                  }
                  sx={{
                    position: "absolute !important",
                    zIndex: 999,
                    top: 0,
                    right: 0,
                  }}
                />
                <Select
                  value={selectedGlyphs.left.secondTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        secondTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="divider" />
              <div className="glyph">
                {selectedGlyphs.right.secondTileOn && (
                  <div className="active" />
                )}
                <Checkbox
                  checked={!!selectedGlyphs.right.secondTileOn}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        secondTileOn: e.target.checked,
                      },
                    })
                  }
                  sx={{
                    position: "absolute !important",
                    zIndex: 999,
                    top: 0,
                    right: 0,
                  }}
                />
                <Select
                  value={selectedGlyphs.right.secondTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        secondTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {selectedGlyphs.left.thirdTileOn && <div className="active" />}
                <Checkbox
                  checked={!!selectedGlyphs.left.thirdTileOn}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        thirdTileOn: e.target.checked,
                      },
                    })
                  }
                  sx={{
                    position: "absolute !important",
                    zIndex: 999,
                    top: 0,
                    right: 0,
                  }}
                />
                <Select
                  value={selectedGlyphs.left.thirdTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        thirdTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {selectedGlyphs.right.thirdTileOn && <div className="active" />}
                <Checkbox
                  checked={!!selectedGlyphs.right.thirdTileOn}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        thirdTileOn: e.target.checked,
                      },
                    })
                  }
                  sx={{
                    position: "absolute !important",
                    zIndex: 999,
                    top: 0,
                    right: 0,
                  }}
                />
                <Select
                  value={selectedGlyphs.right.thirdTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        thirdTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
            </div>
            <div className="solution-box">
              <div className="glyph">
                {!solutionGlyphs.left.isTruth && <div className="active" />}
                <Select
                  value={solutionGlyphs.left.firstTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {!solutionGlyphs.right.isTruth && <div className="active" />}
                <Select
                  value={solutionGlyphs.right.firstTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {!solutionGlyphs.left.isTruth && <div className="active" />}
                <Select
                  value={solutionGlyphs.left.secondTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="divider" />
              <div className="glyph">
                {!solutionGlyphs.right.isTruth && <div className="active" />}
                <Select
                  value={solutionGlyphs.right.secondTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {!solutionGlyphs.left.isTruth && <div className="active" />}
                <Select
                  value={solutionGlyphs.left.thirdTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="glyph">
                {!solutionGlyphs.right.isTruth && <div className="active" />}
                <Select
                  value={solutionGlyphs.right.thirdTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {encounterThreeGlyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
            </div>
            <div className="steps-box">
              <div className="location">
                <h3 className="title">Left Room Glyphs</h3>
                <div className="steps">
                  {solutionSteps
                    .filter((ss) => ss.location === TileLocation.LEFT)
                    .map((s) => (
                      <div key={s.image} className="step">
                        {s.activate && <div className="active" />}
                        <Tooltip title={s.tile} arrow>
                          <img src={s.image} alt="" />
                        </Tooltip>
                      </div>
                    ))}
                </div>
              </div>
              <div className="location">
                <h3 className="title">Middle Room Glyphs</h3>
                <div className="steps">
                  {solutionSteps
                    .filter((ss) => ss.location === TileLocation.MIDDLE)
                    .map((s) => (
                      <div key={s.image} className="step">
                        {s.activate && <div className="active" />}
                        <Tooltip title={s.tile} arrow>
                          <img src={s.image} alt="" />
                        </Tooltip>
                      </div>
                    ))}
                </div>
              </div>
              <div className="location">
                <h3 className="title">Right Room Glyphs</h3>
                <div className="steps">
                  {solutionSteps
                    .filter((ss) => ss.location === TileLocation.RIGHT)
                    .map((s) => (
                      <div key={s.image} className="step">
                        {s.activate && <div className="active" />}
                        <Tooltip title={s.tile} arrow>
                          <img src={s.image} alt="" />
                        </Tooltip>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunderedDoctrineEncounterThree;
