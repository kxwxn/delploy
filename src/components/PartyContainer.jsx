import { styled } from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { PartyPost } from "../pages/PartyPost";

const Wrapper = styled.div``;
const Archiving = styled(Link)`
  text-decoration: none;
  color: black;
  
`;

export const PartyContainer = () => {
  return (
    <Wrapper>
      <Archiving to="/party/post">Archiving</Archiving>
      <Outlet />
    </Wrapper>
  );
};
