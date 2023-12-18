import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Projects } from "./pages/Projects";
import { Photograph } from "./pages/Photograph";
import { ThreeDSpace } from "./pages/ThreeDSpace";
import { Party } from "./pages/Party";
import { Info } from "./pages/Info";
import { SignUP } from "./pages/SIgnUp";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "photograph", element: <Photograph /> },
      { path: "projects", element: <Projects /> },
      { path: "3d-space", element: <ThreeDSpace /> },
      { path: "party", element: <Party /> },
      { path: "info", element: <Info /> },
      { path: "profile", element: <Profile /> },
      { path: "signup", element: <SignUP /> },
    ],
  },
]);
