import { useNavigate } from "react-router-dom";
import "./Base.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { IconButton, Tooltip } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function Base(props: {
  title: string;
  reset: Function;
  isLanding?: boolean;
  isBase?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div className="base">
      {!props.isLanding && (
        <IconButton onClick={() => navigate(-1)}>
          <Tooltip title="Back" placement="right" arrow>
            <ArrowCircleLeftIcon />
          </Tooltip>
        </IconButton>
      )}
      <div className="title">{props.title}</div>
      {(!props.isBase && !props.isLanding) && (
        <IconButton onClick={() => props.reset()}>
          <Tooltip title="Reset Encounter" arrow>
            <RestartAltIcon />
          </Tooltip>
        </IconButton>
      )}
    </div>
  );
}

export default Base;
