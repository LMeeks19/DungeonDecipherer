import { useNavigate } from "react-router-dom";
import Base from "../Base";
import "./SunderedDoctrineHome.css";

import SDE1Art from "../../Images/SD-E1-Art.jpg";
import SDE2Art from "../../Images/SD-E2-Art.jpg";
import SDE3Art from "../../Images/SD-E3-Art.jpg";

function SunderedDoctrineHome() {
  const navigate = useNavigate();

  const FloodedInspectionImage = `url(${SDE1Art})`;
  const AlteredConvolutionImage = `url(${SDE2Art})`;
  const IsolatePreservationImage = `url(${SDE3Art})`;

  return (
    <div className="sundered-doctrine-home">
      <div className="home">
        <Base title="Sundered Doctrine" reset={function () {}} isBase />
        <div className="encounters">
          <div
            className="encounter"
            style={{ backgroundImage: FloodedInspectionImage }}
            onClick={() => navigate("FloodedInspection")}
          >
            <div className="title">Flooded Inspection</div>
          </div>
          <div
            className="encounter"
            style={{ backgroundImage: AlteredConvolutionImage }}
            onClick={() => navigate("AlteredConvolution")}
          >
            <div className="title">Altered Convolution</div>
          </div>
          <div
            className="encounter"
            style={{ backgroundImage: IsolatePreservationImage }}
            onClick={() => navigate("IsolatePreservation")}
          >
            <div className="title">Isolate Preservation</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunderedDoctrineHome;
