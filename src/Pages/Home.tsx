import { useNavigate } from "react-router-dom";
import Base from "./Base";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Base title="Dungeon Decipherer" />
      <button onClick={() => navigate("SunderedDoctrine")}>
        Sundered Doctrine
      </button>
    </div>
  );
}

export default Home;
