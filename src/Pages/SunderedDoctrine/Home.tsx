import { useNavigate } from "react-router-dom";
import Base from "../Base";
import "./Home.css";

import SDE1Art from "../../Images/SD-E1-Art.jpg";
import SDE2Art from "../../Images/SD-E2-Art.jpg";
import SDE3Art from "../../Images/SD-E3-Art.jpg";

function SunderedDoctrineHome() {
  const navigate = useNavigate();

  return (
    <div className="sundered-doctrine-home">
      <Base title="Sundered Doctrine" />
      <div className="content">
        <div
          className="encounter"
          style={{ backgroundImage: `url(${SDE1Art})` }}
          onClick={() => navigate("FloodedInspection")}
        >
          <div className="title">Flooded Inspection</div>
        </div>
        <div
          className="encounter"
          style={{ backgroundImage: `url(${SDE2Art})` }}
          onClick={() => navigate("AlteredConvolution")}
        >
          <div className="title">Altered Convolution</div>
        </div>
        <div
          className="encounter"
          style={{ backgroundImage: `url(${SDE3Art})` }}
          onClick={() => navigate("IsolatePreservation")}
        >
          <div className="title">Isolate Preservation</div>
        </div>
      </div>
    </div>
  );
}

export default SunderedDoctrineHome;
