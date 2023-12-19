import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//-------------------------------------------------------------------------//

// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import { Router as AppRouter } from "./router";

// function App() {
//   return (
//     <Router>
//       <AppRouter />
//     </Router>
//   );
// }

// export default App;
