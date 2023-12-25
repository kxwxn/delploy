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
import { PrivateRoute } from "./components/PrivateRoute";
import { PartyPost } from "./pages/PartyPost";
import { M } from "./pages/M";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "photograph", element: <Photograph /> },
      { path: "projects", element: <Projects /> },
      { path: "3d-space", element: <ThreeDSpace /> },
      {
        path: "party",
        element: (
          <PrivateRoute>
            <Party />
          </PrivateRoute>
        ),
        children: [
          {
            path: "post",
            element: <PartyPost />,
          },
          { path: "m1", element: <M title="M1" content="Hello M Genre" /> },
          { path: "m2", element: <M title="M2" content="Hello M Genre" /> },
          { path: "m3", element: <M title="M3" content="Hello M Genre" /> },
          { path: "m4", element: <M title="M4" content="Hello M Genre" /> },
          { path: "m5", element: <M title="M5" content="Hello M Genre" /> },
          { path: "m6", element: <M title="M6" content="Hello M Genre" /> },
          { path: "m7", element: <M title="M7" content="Hello M Genre" /> },
          { path: "m8", element: <M title="M8" content="Hello M Genre" /> },
        ],
      },
      { path: "info", element: <Info /> },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      { path: "signup", element: <SignUP /> },
    ],
  },
]);
