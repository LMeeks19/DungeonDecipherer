import { MenuItem } from "@mui/material";
import { Tile } from "../Enums/Tile";
import { getTileImage } from "./SunderedDoctrineEncounterThreeMethods";

export interface Module {
  id: string;
  type: "wheel" | "boss" | "wizard" | "lock";
  position: { x: string; y: string };
}

export const modules: Module[] = [
  {
    id: "W1",
    type: "wheel",
    position: { x: "5%", y: "85%" },
  },
  {
    id: "W2",
    type: "wheel",
    position: { x: "37.5%", y: "60%" },
  },
  {
    id: "W3",
    type: "wheel",
    position: { x: "62.5%", y: "60%" },
  },
  {
    id: "W4",
    type: "wheel",
    position: { x: "95%", y: "45%" },
  },
  {
    id: "B1",
    type: "boss",
    position: { x: "10%", y: "17.5%" },
  },
  {
    id: "B2",
    type: "boss",
    position: { x: "32.5%", y: "15%" },
  },
  {
    id: "B3",
    type: "boss",
    position: { x: "67.5%", y: "15%" },
  },
  {
    id: "B4",
    type: "boss",
    position: { x: "90%", y: "17.5%" },
  },
  {
    id: "E1",
    type: "wizard",
    position: { x: "20%", y: "57.5%" },
  },
  {
    id: "E2",
    type: "wizard",
    position: { x: "50%", y: "75%" },
  },
  {
    id: "E3",
    type: "wizard",
    position: { x: "80%", y: "57.5%" },
  },

  {
    id: "L1",
    type: "lock",
    position: { x: "10%", y: "40%" },
  },
  {
    id: "L2",
    type: "lock",
    position: { x: "32.5%", y: "40%" },
  },
  {
    id: "L3",
    type: "lock",
    position: { x: "67.5%", y: "40%" },
  },
  {
    id: "L4",
    type: "lock",
    position: { x: "90%", y: "40%" },
  },
];

export const encounterTwoGlyphMenuItems = Object.values(Tile).map((value) => {
  return (
    <MenuItem key={value} value={value}>
      <img src={getTileImage(value)} alt={getTileImage(value)} />
    </MenuItem>
  );
});
