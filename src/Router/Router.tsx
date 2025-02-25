import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";
import SunderdDoctrineEncounterOne from "../Pages/SunderedDoctrine/EncounterOne";
import SunderedDoctrineEncounterThree from "../Pages/SunderedDoctrine/EncounterThree";
import SunderdDoctrineEncounterTwo from "../Pages/SunderedDoctrine/EncounterTwo";
import SunderedDoctrineHome from "../Pages/SunderedDoctrine/SunderedDoctrineHome";

export const router = createBrowserRouter([
  { path: "/DungeonDecipherer", element: <Landing /> },
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
    element: <SunderedDoctrineEncounterThree />,
  },
]);
