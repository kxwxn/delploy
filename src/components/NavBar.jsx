import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: sticky;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0.7rem;
  font-size: ${(props) => (props.home ? "2rem" : "1rem")};
`;
const Dropdown = styled.div`
  display: none;
  text-align: left;
  font-weight: 150;
  padding-left: 30px;
`;

const PartyDrop = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.7rem 0 0.7rem 0;
  &:hover ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <NavLink to="/">face</NavLink>
      <NavLink to="/thoughts">Brain</NavLink>
      <NavLink to="/photograph">eye</NavLink>
      <NavLink to="/body">body</NavLink>
      <PartyDrop>
        <NavLink to="/party">ear</NavLink>
        <Dropdown>
          <NavLink to="/party/m1">m1</NavLink>
          <NavLink to="/party/m2">m2</NavLink>
          <NavLink to="/party/m3">m3</NavLink>
          <NavLink to="/party/m4">m4</NavLink>
          <NavLink to="/party/m5">m5</NavLink>
          <NavLink to="/party/m6">m6</NavLink>
          <NavLink to="/party/m7">m7</NavLink>
          <NavLink to="/party/m8">m8</NavLink>
        </Dropdown>
      </PartyDrop>
      <NavLink to="/info">soul</NavLink>
    </Wrapper>
  );
};
