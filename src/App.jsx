import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  background-color: #fff8ed;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Wrapper>
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
