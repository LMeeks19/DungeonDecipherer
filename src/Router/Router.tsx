import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SunderdDoctrineEncounterOne from "../Pages/SunderedDoctrine/EncounterOne";
import SunderdDoctrineEncounterThree from "../Pages/SunderedDoctrine/EncounterThree";
import SunderdDoctrineEncounterTwo from "../Pages/SunderedDoctrine/EncounterTwo";
import SunderedDoctrineHome from "../Pages/SunderedDoctrine/Home";

export const router = createBrowserRouter([
  { path: "/DungeonDecipherer", element: <Home /> },
  {
    path: "/DungeonDecipherer/SunderedDoctrine",
    element: <SunderedDoctrineHome />,
  },
  {
    path: "/DungeonDecipherer/SunderedDoctrine/FloodedInspection",
    element: <SunderdDoctrineEncounterOne />,
  },
  {
    path: "/DungeonDecipherer/SunderedDoctrine/AlteredConvolution",
    element: <SunderdDoctrineEncounterTwo />,
  },
  {
    path: "/DungeonDecipherer/SunderedDoctrine/IsolatePreservation",
    element: <SunderdDoctrineEncounterThree />,
  },
]);
