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

// mlist 데이터를 Party.jsx 로 부터 받아오는게 아닌 전역상태관리앱인 recoil 을 사용해서 가져온다.
