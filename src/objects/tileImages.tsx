import { Tile } from "../Enums/Tile";
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
];

export function getTileImage(tile: Tile): string {
  return tileImages.find(t => t.tile === tile)!.image;
}
