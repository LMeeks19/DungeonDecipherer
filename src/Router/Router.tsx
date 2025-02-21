import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SunderdDoctrineEncounterOne from "../Pages/SunderedDoctrine/EncounterOne";
import SunderdDoctrineEncounterThree from "../Pages/SunderedDoctrine/EncounterThree";
import SunderdDoctrineEncounterTwo from "../Pages/SunderedDoctrine/EncounterTwo";
import SunderedDoctrineHome from "../Pages/SunderedDoctrine/Home";

export const router = createBrowserRouter([
    { path: "/", element: <Home />},
    { path: "/SunderedDoctrine", element: <SunderedDoctrineHome /> },
    { path: "/SunderedDoctrine/FloodedInspection", element: <SunderdDoctrineEncounterOne /> },
    { path: "/SunderedDoctrine/AlteredConvolution", element: <SunderdDoctrineEncounterTwo /> },
    { path: "/SunderedDoctrine/IsolatePreservation", element: <SunderdDoctrineEncounterThree /> },

  ]);