import { useNavigate } from "react-router-dom";
import "./Base.css";

function Base(props: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="base">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="title" style={{ margin: 0, color: "white" }}>
        {props.title}
      </div>
    </div>
  );
}

export default Base;
