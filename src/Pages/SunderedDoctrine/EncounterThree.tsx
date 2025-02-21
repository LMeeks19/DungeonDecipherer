import "./EncounterThree.css";

import { MenuItem, Tooltip, Checkbox, Select } from "@mui/material";
import { useState, useEffect } from "react";
import { Tile, TileLocation } from "../../Enums/Tile";
import {
  CalculateSolution,
  CalculateSteps,
} from "../../Methods/CombinationChecker";
import { CombinationWheelObject } from "../../Models/Combination";
import { Step } from "../../Models/Step";

import NeutralGlyph from "../../Images/NeutralGlyph.jpg";
import WitnessGlyph from "../../Images/WitnessGlyph.jpg";
import HiveGlyph from "../../Images/HiveGlyph.jpg";
import GuardianGlyph from "../../Images/GuardianGlyph.jpg";
import PyramidGlyph from "../../Images/PyramidGlyph.jpg";
import TravellerGlyph from "../../Images/TravellerGlyph.jpg";
import DrinkGlyph from "../../Images/DrinkGlyph.jpg";
import StopGlyph from "../../Images/StopGlyph.jpg";
import GiveGlyph from "../../Images/GiveGlyph.jpg";
import WorshipGlyph from "../../Images/WorshipGlyph.jpg";
import KillGlyph from "../../Images/KillGlyph.jpg";
import WormGlyph from "../../Images/WormGlyph.jpg";
import SavathunGlyph from "../../Images/SavathunGlyph.jpg";
import DarknessGlyph from "../../Images/DarknessGlyph.jpg";
import LightGlyph from "../../Images/LightGlyph.jpg";
import Base from "../Base";

function SunderdDoctrineEncounterThree() {
  const glyphMenuItems = [
    <MenuItem key={Tile.NEUTRAL} value={Tile.NEUTRAL}>
      <Tooltip title={Tile.NEUTRAL} arrow>
        <img src={NeutralGlyph} alt={NeutralGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.WITNESS} value={Tile.WITNESS}>
      <Tooltip title={Tile.WITNESS} arrow>
        <img src={WitnessGlyph} alt={WitnessGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.HIVE} value={Tile.HIVE}>
      <Tooltip title={Tile.HIVE} arrow>
        <img src={HiveGlyph} alt={HiveGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.GUARDIAN} value={Tile.GUARDIAN}>
      <Tooltip title={Tile.GUARDIAN} arrow>
        <img src={GuardianGlyph} alt={GuardianGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.PYRAMID} value={Tile.PYRAMID}>
      <Tooltip title={Tile.PYRAMID} arrow>
        <img src={PyramidGlyph} alt={PyramidGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.TRAVELLER} value={Tile.TRAVELLER}>
      <Tooltip title={Tile.TRAVELLER} arrow>
        <img src={TravellerGlyph} alt={TravellerGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.DRINK} value={Tile.DRINK}>
      <Tooltip title={Tile.DRINK} arrow>
        <img src={DrinkGlyph} alt={DrinkGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.STOP} value={Tile.STOP}>
      <Tooltip title={Tile.STOP} arrow>
        <img src={StopGlyph} alt={StopGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.GIVE} value={Tile.GIVE}>
      <Tooltip title={Tile.GIVE} arrow>
        <img src={GiveGlyph} alt={GiveGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.WORSHIP} value={Tile.WORSHIP}>
      <Tooltip title={Tile.WORSHIP} arrow>
        <img src={WorshipGlyph} alt={WorshipGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.KILL} value={Tile.KILL}>
      <Tooltip title={Tile.KILL} arrow>
        <img src={KillGlyph} alt={KillGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.WORM} value={Tile.WORM}>
      <Tooltip title={Tile.WORM} arrow>
        <img src={WormGlyph} alt={WormGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.SAVATHÛN} value={Tile.SAVATHÛN}>
      <Tooltip title={Tile.SAVATHÛN} arrow>
        <img src={SavathunGlyph} alt={SavathunGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.DARKNESS} value={Tile.DARKNESS}>
      <Tooltip title={Tile.DARKNESS} arrow>
        <img src={DarknessGlyph} alt={DarknessGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.LIGHT} value={Tile.LIGHT}>
      <Tooltip title={Tile.LIGHT} arrow>
        <img src={LightGlyph} alt={LightGlyph} />
      </Tooltip>
    </MenuItem>,
  ];

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
  const [solutionGlyphs, setSolutionGlyphs] =
    useState<CombinationWheelObject | null>(null);
  const [solutionSteps, setSolutionSteps] = useState<Step[]>([] as Step[]);

  useEffect(() => {
    var solution = CalculateSolution(selectedGlyphs);
    setSolutionGlyphs(solution);

    if (solution !== null)
      setSolutionSteps(CalculateSteps(selectedGlyphs, solution));
  }, [selectedGlyphs]);

  return (
    <div className="sundered-doctrine-encounter-three">
      <Base title="Sundered Doctrine: Isolate Preservation" />
      <div className="content">
        <div className="box">
          <h2 className="title">Input</h2>
          <div className="content-box">
            <div className="input-grid">
              <div className="grid-item">
                {selectedGlyphs.left?.firstTileOn && <div className="active" />}
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
                  {glyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                {selectedGlyphs.right?.firstTileOn && (
                  <div className="active" />
                )}
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
                  {glyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item middle-left">
                {selectedGlyphs.left?.secondTileOn && (
                  <div className="active" />
                )}
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
                  {glyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item middle-right">
                {selectedGlyphs.right?.secondTileOn && (
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
                  {glyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                {selectedGlyphs.left?.thirdTileOn && <div className="active" />}
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
                  {glyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                {selectedGlyphs.right?.thirdTileOn && (
                  <div className="active" />
                )}
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
                  {glyphMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <h2 className="title">Solution</h2>
          <div className="content-box">
            {solutionGlyphs !== null ? (
              <div className="input-grid">
                <div className="grid-item">
                  {!solutionGlyphs.left?.isTruth && <div className="active" />}
                  <Select
                    value={solutionGlyphs.left?.firstTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item">
                  {!solutionGlyphs.right?.isTruth && <div className="active" />}
                  <Select
                    value={solutionGlyphs.right?.firstTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item middle-left">
                  {!solutionGlyphs.left?.isTruth && <div className="active" />}
                  <Select
                    value={solutionGlyphs.left?.secondTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item middle-right">
                  {!solutionGlyphs.right?.isTruth && <div className="active" />}
                  <Select
                    value={solutionGlyphs.right?.secondTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item">
                  {!solutionGlyphs.left?.isTruth && <div className="active" />}
                  <Select
                    value={solutionGlyphs.left?.thirdTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item">
                  {!solutionGlyphs.right?.isTruth && <div className="active" />}
                  <Select
                    value={solutionGlyphs.right?.thirdTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
              </div>
            ) : (
              <div>No Solution Found</div>
            )}
          </div>
        </div>
        {solutionGlyphs !== null && (
          <div className="box">
            <h2 className="title">Steps</h2>
            <div className="content-box">
              <div className="steps-grid">
                <div className="step-item">
                  <h3 className="sub-title">Left</h3>
                  {solutionSteps.filter(
                    (ss) => ss.location === TileLocation.LEFT
                  ).length === 0 ? (
                    <div className="steps empty">No steps</div>
                  ) : (
                    <div className="steps">
                      {solutionSteps
                        .filter((ss) => ss.location === TileLocation.LEFT)
                        .map((s) => (
                          <div key={s.step} className="step">
                            <img src={s.image} alt="" />
                            {s.step}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                <div className="step-item">
                  <h3 className="sub-title">Middle</h3>
                  {solutionSteps.filter(
                    (ss) => ss.location === TileLocation.MIDDLE
                  ).length === 0 ? (
                    <div className="steps empty">No steps</div>
                  ) : (
                    <div className="steps">
                      {solutionSteps
                        .filter((ss) => ss.location === TileLocation.MIDDLE)
                        .map((s) => (
                          <div key={s.step} className="step">
                            <img src={s.image} alt="" />
                            {s.step}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                <div className="step-item">
                  <h3 className="sub-title">Right</h3>
                  {solutionSteps.filter(
                    (ss) => ss.location === TileLocation.RIGHT
                  ).length === 0 ? (
                    <div className="steps empty">No steps</div>
                  ) : (
                    <div className="steps">
                      {solutionSteps
                        .filter((ss) => ss.location === TileLocation.RIGHT)
                        .map((s) => (
                          <div key={s.step} className="step">
                            <img src={s.image} alt="" />
                            {s.step}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SunderdDoctrineEncounterThree;
