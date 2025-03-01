import Base from "../Base";
import "./EncounterTwo.css";
import {
  Module,
  modules,
} from "../../Methods/SunderedDoctrineEncounterTwoMethods";
import { Select, Tooltip } from "@mui/material";
import { Tile } from "../../Enums/Tile";
import { encounterTwoGlyphMenuItems } from "../../Methods/SunderedDoctrineEncounterTwoMethods";

function SunderdDoctrineEncounterTwo() {
  function getBackgroundColour(module: Module): string {
    switch (module.type) {
      case "wheel":
        return "#242424";
      case "boss":
        return "red";
      case "wizard":
        return "blue";
      case "lock":
        return "orange";
    }
  }

  function getBorderColour(module: Module): string {
    switch (module.type) {
      case "wheel":
        return "grey";
      case "boss":
        return "red";
      case "wizard":
        return "blue";
      case "lock":
        return "orange";
    }
  }

  function getModuleInfo(module: Module) {
    switch (module.type) {
      case "wheel":
        return "Glyph wheel";
      case "boss":
        return "Boss entity";
      case "wizard":
        return "Wizard spawn";
      case "lock":
        return "Locked glyph";
    }
  }

  return (
    <div className="sundered-doctrine-encounter-two">
      <div className="encounter-two">
        <Base
          title="Sundered Doctrine: Altered Convolution"
          reset={function () {}}
        />
        <div className="content">
          <div className="encounter-grid">
            <div className="flow">
              <div className="title">Encounter Flow</div>
              <div className="steps">
                <div className="step">
                  Kill wizards to spawn knowledge pickup (max pick up of 3)
                </div>
                <div className="step">
                  Deposit the required number of knowledge to reach the{" "}
                  <strong>KILL</strong> glyph on the left most wheel
                </div>
                <div className="step">
                  Optionally deposit required number of knowledge to reach the{" "}
                  <strong>STOP</strong> glyph of all other wheels
                </div>
                <div className="step">
                  Damage the boss until lockset progression bar resets again
                </div>
              </div>
            </div>
            <div className="mechanics">
              <div className="title">Glyph Wheel Actions</div>
              <div className="glyphs">
                <div className="glyph">
                  <Select
                    value={Tile.NEUTRAL}
                    sx={{
                      svg: { display: "none" },
                      pointerEvents: "none",
                    }}
                    readOnly
                  >
                    {encounterTwoGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                  <div className="info">Does literally nothing</div>
                </div>
                <div className="glyph">
                  <Select
                    value={Tile.HIVE}
                    sx={{
                      svg: { display: "none" },
                      pointerEvents: "none",
                    }}
                    readOnly
                  >
                    {encounterTwoGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                  <div className="info">Spawns miniboss ogres</div>
                </div>
                <div className="glyph">
                  <Select
                    value={Tile.KILL}
                    sx={{
                      svg: { display: "none" },
                      pointerEvents: "none",
                    }}
                    readOnly
                  >
                    {encounterTwoGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                  <div className="info">Begins damage phase</div>
                </div>
                <div className="glyph">
                  <Select
                    value={Tile.STOP}
                    sx={{
                      svg: { display: "none" },
                      pointerEvents: "none",
                    }}
                    readOnly
                  >
                    {encounterTwoGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                  <div className="info">Stops enemy spawns</div>
                </div>
                <div className="glyph">
                  <Select
                    value={Tile.REMEMBER}
                    sx={{
                      svg: { display: "none" },
                      pointerEvents: "none",
                    }}
                    readOnly
                  >
                    {encounterTwoGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                  <div className="info">Spawns excess wizards</div>
                </div>
                <div className="glyph">
                  <Select
                    value={Tile.COMMUNE}
                    sx={{
                      svg: { display: "none" },
                      pointerEvents: "none",
                    }}
                    readOnly
                  >
                    {encounterTwoGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                  <div className="info">Spawns resonance projectiles</div>
                </div>
              </div>
            </div>
            <div className="encounter-map">
              {modules.map((module) => (
                <Tooltip title={getModuleInfo(module)} arrow>
                  <div
                    key={module.id}
                    className={`module ${module.type}`}
                    style={{
                      top: module.position.y,
                      left: module.position.x,
                      backgroundColor: getBackgroundColour(module),
                      border: `2px solid ${getBorderColour(module)}`,
                    }}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunderdDoctrineEncounterTwo;
