import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentArea = styled.pre``;
const PostBtn = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Projects = () => {
  return (
    <Wrapper>
      <PostBtn to="/projects/post">POST</PostBtn>
    </Wrapper>
  );
};

// 1. 기술블로그
// 2. 검색 가능.
// 3. 무한 스크롤.
