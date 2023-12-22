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
import { M1 } from "./pages/m/M1";
import { M2 } from "./pages/m/M2";
import { M3 } from "./pages/m/M3";
import { M4 } from "./pages/m/M4";
import { M5 } from "./pages/m/M5";
import { M6 } from "./pages/m/M6";
import { M7 } from "./pages/m/M7";
import { M8 } from "./pages/m/M8";

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
          { path: "m1", element: <M1 /> },
          { path: "m2", element: <M2 /> },
          { path: "m3", element: <M3 /> },
          { path: "m4", element: <M4 /> },
          { path: "m5", element: <M5 /> },
          { path: "m6", element: <M6 /> },
          { path: "m7", element: <M7 /> },
          { path: "m8", element: <M8 /> },
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

//-----------------------------------------------------------------------------//

// import { useRoutes, useNavigate } from "react-router-dom";
// import { Layout } from "./components/Layout";
// import { Landing } from "./pages/Landing";
// import { Projects } from "./pages/Projects";
// import { Photograph } from "./pages/Photograph";
// import { ThreeDSpace } from "./pages/ThreeDSpace";
// import { Party } from "./pages/Party";
// import { Info } from "./pages/Info";
// import { SignUP } from "./pages/SIgnUp";
// import { Profile } from "./pages/Profile";

// export const Router = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = checkIfUserIsLoggedIn(); // Replace this with actual login check

//   const routes = useRoutes([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "/", element: <Landing /> },
//         { path: "photograph", element: <Photograph /> },
//         { path: "projects", element: <Projects /> },
//         { path: "3d-space", element: <ThreeDSpace /> },
//         { path: "party", element: <Party /> },
//         { path: "info", element: <Info /> },
//         { path: "profile", element: isLoggedIn ? <Profile /> : null },
//         { path: "signup", element: <SignUP /> },
//       ],
//     },
//   ]);

//   // If user is not logged in and tries to access profile, redirect to signup
//   if (!isLoggedIn && window.location.pathname === "/profile") {
//     navigate("/signup");
//   }

//   return routes;
// };
