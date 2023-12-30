import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { articleState } from "../recoil/atoms/articleState";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Wrapper = styled.div``;
const ArticleContainer = styled.div``;
const Title = styled.div``;
const Content = styled(ReactMarkdown)``;
const DeleteBtn = styled.button`
  background: url("https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Fdelete.png?alt=media&token=707fd768-a937-454e-aa6d-8c9df8fa9907")
    no-repeat center bottom;
  background-size: 20px;
  border: none;
  width: 20px;
  height: 20px;
`;
const BackToBrainBtn = styled(Link)``;

export const Article = () => {
  const article = useRecoilValue(articleState);

  const handleDeleteClick = () => {};

  return (
    <Wrapper>
      <ArticleContainer>
        <Title>{article.title}</Title>
        <DeleteBtn onClick={handleDeleteClick} />
        <Content children={article.content} />
        <BackToBrainBtn to="/thoughts">목록</BackToBrainBtn>
      </ArticleContainer>
    </Wrapper>
  );
};
