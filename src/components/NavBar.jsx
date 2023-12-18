import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: sticky;
  border: 0.2rem solid black;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 2rem 2rem 2rem 2rem;
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <NavLink to="/">home</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/photograph">photograph</NavLink>
      <NavLink to="/3d-space">3d-space!</NavLink>
      <NavLink to="/party">party</NavLink>
      <NavLink to="/info">info</NavLink>
    </Wrapper>
  );
};
