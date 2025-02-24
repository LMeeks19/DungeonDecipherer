import { useNavigate } from "react-router-dom";
import "./Base.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { IconButton, Tooltip } from "@mui/material";

function Base(props: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="base">
      <IconButton className="back-button" onClick={() => navigate(-1)}>
        <Tooltip title="Back" placement="right" arrow>
          <ArrowCircleLeftIcon />
        </Tooltip>
      </IconButton>
      <div className="title">{props.title}</div>
    </div>
  );
}

export default Base;
