import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;
const PostLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 900;
`;

export const M = (props) => {
  const { title, content } = props;

  return (
    <Wrapper>
      {title}
      <h1>{content}</h1>
    </Wrapper>
  );
};
