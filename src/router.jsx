import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Photograph } from "./pages/Photograph";
import { ThreeDSpace } from "./pages/ThreeDSpace";
import { Party } from "./pages/Party";
import { Info } from "./pages/Info";
import { SignUP } from "./pages/SIgnUp";
import { Profile } from "./pages/Profile";
import { PrivateRoute } from "./components/PrivateRoute";
import { PartyPost } from "./pages/PartyPost";
import { M } from "./pages/M";
import { PartyContainer } from "./components/PartyContainer";
import { BlogPost } from "./pages/BlogPost";
import { Thoughts } from "./pages/Projects";
import { Article } from "./pages/Article";
import { ThoughtsLayout } from "./components/ThoughtsLayout";
import { Face } from "./pages/Face";
import { Body } from "./pages/Body";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Face /> },
      { path: "photograph", element: <Photograph /> },
      {
        path: "thoughts",
        element: <ThoughtsLayout />,
        children: [
          { path: "/thoughts", element: <Thoughts /> },
          { path: "post", element: <BlogPost /> },
          { path: ":id", element: <Article /> },
        ],
      },
      { path: "body", element: <Body /> },
      {
        path: "party",
        element: (
          <PrivateRoute>
            <PartyContainer />
          </PrivateRoute>
        ),
        children: [
          { path: "/party", element: <Party /> },
          { path: "post", element: <PartyPost /> },
          { path: "m1", element: <M title="M1" content="Hello M1 Genre" /> },
          { path: "m2", element: <M title="M2" content="Hello M2 Genre" /> },
          { path: "m3", element: <M title="M3" content="Hello M3 Genre" /> },
          { path: "m4", element: <M title="M4" content="Hello M4 Genre" /> },
          { path: "m5", element: <M title="M5" content="Hello M5 Genre" /> },
          { path: "m6", element: <M title="M6" content="Hello M6 Genre" /> },
          { path: "m7", element: <M title="M7" content="Hello M7 Genre" /> },
          { path: "m8", element: <M title="M8" content="Hello M8 Genre" /> },
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
