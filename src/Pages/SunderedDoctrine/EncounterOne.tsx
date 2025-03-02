import { Checkbox, Select } from "@mui/material";
import Base from "../Base";
import "./EncounterOne.css";
import { useEffect, useState } from "react";
import { Tile } from "../../Enums/Tile";
import {
  RiddleNodes,
  ActiveNodes,
  PossibleSolutions,
} from "../../Methods/SunderedDoctrineEncounterOneMethods";
import { encounterThreeGlyphMenuItems } from "../../Methods/SunderedDoctrineEncounterThreeMethods";
import PathfindingComponent from "../../Components/PathfindingComponent";

function SunderdDoctrineEncounterOne() {
  const [riddle, setRiddle] = useState<RiddleNodes>({
    leftNode: Tile.NEUTRAL,
    middleNode: Tile.NEUTRAL,
    rightNode: Tile.NEUTRAL,
  } as RiddleNodes);
  const [activeNodes, setActiveNodes] = useState<ActiveNodes>({
    leftOneNode: Tile.NEUTRAL,
    leftTwoNode: Tile.NEUTRAL,
    rightOneNode: Tile.NEUTRAL,
    rightTwoNode: Tile.NEUTRAL,
  } as ActiveNodes);
  const [possibleSolutions, setPossibleSolutions] = useState<RiddleNodes[]>([]);

  useEffect(() => {
    if (
      riddle.leftNode !== Tile.NEUTRAL ||
      riddle.middleNode !== Tile.NEUTRAL ||
      riddle.rightNode !== Tile.NEUTRAL
    )
      setPossibleSolutions(PossibleSolutions(riddle));
    else setPossibleSolutions([]);
  }, [riddle]);

  function resetEncounter() {
    setRiddle({
      leftNode: Tile.NEUTRAL,
      middleNode: Tile.NEUTRAL,
      rightNode: Tile.NEUTRAL,
    } as RiddleNodes);
    setActiveNodes({
      leftOneNode: Tile.NEUTRAL,
      leftTwoNode: Tile.NEUTRAL,
      rightOneNode: Tile.NEUTRAL,
      rightTwoNode: Tile.NEUTRAL,
    } as ActiveNodes);
    setPossibleSolutions([]);
  }

  function calculateTotalActiveNodes() {
    var totalActiveNodes: number = 0;
    if (activeNodes.leftOneNodeActive) totalActiveNodes++;
    if (activeNodes.leftTwoNodeActive) totalActiveNodes++;
    if (activeNodes.rigthOneNodeActive) totalActiveNodes++;
    if (activeNodes.rightTwoNodeActive) totalActiveNodes++;
    return totalActiveNodes;
  }

  return (
    <div className="sundered-doctrine-encounter-one">
      <div className="encounter-one">
        <Base
          title="Sundered Doctrine: Flooded Inspection"
          reset={resetEncounter}
        />
        <div className="content">
          <div className="encounter-grid">
            <div className="flow">
              <div className="title">Encounter Flow</div>
              <div className="steps">
                <div className="step">
                  Observe the riddle in the center room and input the filled in
                  glyphs below
                </div>
                <div className="step">
                  Narrow down the riddle solutions by finsing the{" "}
                  <strong>TRUTHSEEKER</strong> enemy
                </div>
                <div className="step">
                  Find respective glyphs in side rooms and input and activate
                  them below
                </div>
                <div className="step">
                  Use the displayed optimal paths to connect to the active
                  end nodes
                </div>
                <div className="step">Repeat 2 more times</div>
              </div>
            </div>
            <div className="riddle">
              <div className="title">Riddle</div>
              <div className="glyphs">
                <div className="glyph">
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={riddle.leftNode}
                    onChange={(e) =>
                      setRiddle({
                        ...riddle,
                        leftNode: e.target.value as Tile,
                      })
                    }
                  >
                    {encounterThreeGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={riddle.middleNode}
                    onChange={(e) =>
                      setRiddle({
                        ...riddle,
                        middleNode: e.target.value as Tile,
                      })
                    }
                  >
                    {encounterThreeGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={riddle.rightNode}
                    onChange={(e) =>
                      setRiddle({
                        ...riddle,
                        rightNode: e.target.value as Tile,
                      })
                    }
                  >
                    {encounterThreeGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
              </div>
            </div>
            <div className="active-nodes">
              <div className="title">Nodes</div>
              <div className="glyphs">
                <div className="node">L1</div>
                <div className="glyph">
                  {activeNodes.leftOneNodeActive && <div className="active" />}
                  <Checkbox
                    disabled={
                      calculateTotalActiveNodes() >= 3 &&
                      !activeNodes.leftOneNodeActive
                    }
                    checked={!!activeNodes.leftOneNodeActive}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        leftOneNodeActive: e.target.checked,
                      })
                    }
                  />
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={activeNodes.leftOneNode}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        leftOneNode: e.target.value as Tile,
                      })
                    }
                  >
                    {encounterThreeGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  {activeNodes.leftTwoNodeActive && <div className="active" />}
                  <Checkbox
                    disabled={
                      calculateTotalActiveNodes() >= 3 &&
                      !activeNodes.leftTwoNodeActive
                    }
                    checked={!!activeNodes.leftTwoNodeActive}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        leftTwoNodeActive: e.target.checked,
                      })
                    }
                  />
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={activeNodes.leftTwoNode}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        leftTwoNode: e.target.value as Tile,
                      })
                    }
                  >
                    {encounterThreeGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="node">L2</div>
                <div className="node">R1</div>
                <div className="glyph">
                  {activeNodes.rigthOneNodeActive && <div className="active" />}
                  <Checkbox
                    disabled={
                      calculateTotalActiveNodes() >= 3 &&
                      !activeNodes.rigthOneNodeActive
                    }
                    checked={!!activeNodes.rigthOneNodeActive}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        rigthOneNodeActive: e.target.checked,
                      })
                    }
                  />
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={activeNodes.rightOneNode}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        rightOneNode: e.target.value as Tile,
                      })
                    }
                  >
                    {encounterThreeGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  {activeNodes.rightTwoNodeActive && <div className="active" />}
                  <Checkbox
                    disabled={
                      calculateTotalActiveNodes() >= 3 &&
                      !activeNodes.rightTwoNodeActive
                    }
                    checked={!!activeNodes.rightTwoNodeActive}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        rightTwoNodeActive: e.target.checked,
                      })
                    }
                  />
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={activeNodes.rightTwoNode}
                    onChange={(e) =>
                      setActiveNodes({
                        ...activeNodes,
                        rightTwoNode: e.target.value as Tile,
                      })
                    }
                  >
                    {encounterThreeGlyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="node">R2</div>
              </div>
            </div>
            <div className="solutions">
              <div className="title">Possible Solutions</div>
              {possibleSolutions.length === 0 && (
                <div className="empty">No Possible Solutions</div>
              )}
              <div className="glyph-wrapper">
                {possibleSolutions.map((solution) => {
                  return (
                    <div
                      key={
                        solution.leftNode +
                        solution.middleNode +
                        solution.rightNode
                      }
                      className="glyphs"
                    >
                      <div className="glyph">
                        <Select
                          sx={{
                            svg: { display: "none" },
                            pointerEvents: "none",
                          }}
                          value={solution.leftNode}
                          readOnly
                        >
                          {encounterThreeGlyphMenuItems.map((glyph) => {
                            return glyph;
                          })}
                        </Select>
                      </div>
                      <div className="glyph">
                        <Select
                          sx={{
                            svg: { display: "none" },
                            pointerEvents: "none",
                          }}
                          value={solution.middleNode}
                          readOnly
                        >
                          {encounterThreeGlyphMenuItems.map((glyph) => {
                            return glyph;
                          })}
                        </Select>
                      </div>
                      <div className="glyph">
                        <Select
                          sx={{
                            svg: { display: "none" },
                            pointerEvents: "none",
                          }}
                          value={solution.rightNode}
                          readOnly
                        >
                          {encounterThreeGlyphMenuItems.map((glyph) => {
                            return glyph;
                          })}
                        </Select>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="map">
              <div className="title">Optimal Paths</div>
              <PathfindingComponent activeNodes={activeNodes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunderdDoctrineEncounterOne;
