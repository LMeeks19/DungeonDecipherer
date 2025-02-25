import { useNavigate } from "react-router-dom";
import Base from "./Base";
import "./Landing.css";
import SunderdDoctrineKeyArt from "../Images/Sundered-Doctrine-Key-Art.png";
import VespersHostKeyArt from "../Images/Vespers-Host-Key-Art.jpg";
import WarlordsRuinKeyArt from "../Images/Warlords-Ruin-Key-Art.jpg";
import GhostsDeepKeyArt from "../Images/Ghosts-Deep-Key-Art.jpg";
import SpireWatcherKeyArt from "../Images/Spire-Watcher-Key-Art.jpg";
import DualityKeyArt from "../Images/Duality-Key-Art.jpg";
import GraspAvariceKeyArt from "../Images/Grasp-Avarice-Key-Art.jpg";
import ProphecyKeyArt from "../Images/Prophecy-Key-Art.jpg";
import PitHeresyKeyArt from "../Images/Pit-Heresy-Key-Art.jpg"
import ShatteredThroneKeyArt from "../Images/Shattered-Throne-Key-Art.jpeg";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="dungeon-decipherer-landing">
      <div className="landing">
        <Base title="Dungeon Decipherer" reset={new Function()} isLanding />
        <div className="dungeons">
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${SunderdDoctrineKeyArt})` }}
            onClick={() => navigate("SunderedDoctrine")}
          >
            <div className="title">Sundered Doctrine</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${VespersHostKeyArt})` }}
            onClick={() => navigate("VespersHost")}
          >
            <div className="title">Vespers Host</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${WarlordsRuinKeyArt})` }}
            onClick={() => navigate("WarlordsRuin")}
          >
            <div className="title">Warlords Ruin</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${GhostsDeepKeyArt})` }}
            onClick={() => navigate("GhostsOfTheDeep")}
          >
            <div className="title">Ghosts of the Deep</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${SpireWatcherKeyArt})` }}
            onClick={() => navigate("SpireOfTheWatcher")}
          >
            <div className="title">Spire of the Watcher</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${DualityKeyArt})` }}
            onClick={() => navigate("Duality")}
          >
            <div className="title">Duality</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${GraspAvariceKeyArt})` }}
            onClick={() => navigate("GraspOfAvarice")}
          >
            <div className="title">Grasp of Avarice</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${ProphecyKeyArt})` }}
            onClick={() => navigate("Prophecy")}
          >
            <div className="title">Prophecy</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${PitHeresyKeyArt})` }}
            onClick={() => navigate("PitOfHeresy")}
          >
            <div className="title">Pit of Heresy</div>
          </div>
          <div
            className="dungeon"
            style={{ backgroundImage: `url(${ShatteredThroneKeyArt})` }}
            onClick={() => navigate("ShatteredThrone")}
          >
            <div className="title">Shattered Throne</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
