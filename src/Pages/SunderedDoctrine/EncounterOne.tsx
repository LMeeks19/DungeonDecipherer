import { Checkbox, IconButton, Select, Tooltip } from "@mui/material";
import Base from "../Base";
import "./EncounterOne.css";
import { glyphMenuItems } from "../../Objects/tileImages";
import { useState } from "react";
import { ActiveNodes, RiddleNodes } from "../../Objects/nodeObjects";
import { Tile } from "../../Enums/Tile";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function SunderdDoctrineEncounterOne() {
  const [riddleNodes, setRiddleNodes] = useState<RiddleNodes>({
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

  function resetEncounter() {
    setRiddleNodes({
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
  }

  return (
    <div className="sundered-doctrine-encounter-one">
      <div className="encounter-one">
        <div className="encounter-header">
          <Base title="Sundered Doctrine: Flooded Inspection" />
          <IconButton onClick={resetEncounter}>
            <Tooltip title="Reset Encounter" arrow>
              <RestartAltIcon />
            </Tooltip>
          </IconButton>
        </div>
        <div className="content">
          <div className="encounter-grid">
            <div className="riddle">
              <div className="title">Riddle</div>
              <div className="glyphs">
                <div className="glyph">
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={riddleNodes.leftNode}
                    onChange={(e) =>
                      setRiddleNodes({
                        ...riddleNodes,
                        leftNode: e.target.value as Tile,
                      })
                    }
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={riddleNodes.middleNode}
                    onChange={(e) =>
                      setRiddleNodes({
                        ...riddleNodes,
                        middleNode: e.target.value as Tile,
                      })
                    }
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  <Select
                    sx={{ svg: { display: "none" } }}
                    value={riddleNodes.rightNode}
                    onChange={(e) =>
                      setRiddleNodes({
                        ...riddleNodes,
                        rightNode: e.target.value as Tile,
                      })
                    }
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
              </div>
            </div>
            <div className="active-nodes">
              <div className="title">Nodes</div>
              <div className="glyphs">
                <div className="node">L2</div>
                <div className="glyph">
                  {activeNodes.leftTwoNodeActive && <div className="active" />}
                  <Checkbox
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
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  {activeNodes.rightTwoNodeActive && <div className="active" />}
                  <Checkbox
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
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="node">R2</div>
                <div className="node">L1</div>
                <div className="glyph">
                  {activeNodes.leftOneNodeActive && <div className="active" />}
                  <Checkbox
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
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="glyph">
                  {activeNodes.rigthOneNodeActive && <div className="active" />}
                  <Checkbox
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
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="node">R1</div>
              </div>
            </div>
            <div className="dummy"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunderdDoctrineEncounterOne;
