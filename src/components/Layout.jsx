import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

import { styled } from "styled-components";
import { Menu } from "./Menu";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100vh;
  overflow-y: auto;
`;

const OutletFrame = styled.div`
  border: 0.2rem solid red;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Menu />
      <NavBar />
      <OutletFrame>
        <Outlet />
      </OutletFrame>
    </Wrapper>
  );
};
