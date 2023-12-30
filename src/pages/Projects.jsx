import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { InView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { articleState } from "../recoil/atoms/articleState";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ArticleContainer = styled.div`
  border: 2px solid black;
`;
const Title = styled(Link)`
  font-size: 3rem;
  text-decoration: none;
  color: black;
`;
const PostBtn = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Thoughts = () => {
  const [article, setArticle] = useRecoilState(articleState);
  const {
    data: Container,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteScroll("Projects", 12);

  if (isLoading) return "Loading...";
  if (isError) return { error };

  const purifiedContainer = Container.pages.flatMap((item) => {
    return item.data;
  });

  const handleArticleClick = (selectedArticle) => {
    setArticle(selectedArticle);
  };

  const renderArticles = purifiedContainer.map((item, index) => {
    return (
      <ArticleContainer key={index}>
        <Title
          to={`/thoughts/${item.id}`}
          onClick={() => handleArticleClick(item)}
        >
          {item.title}
        </Title>
      </ArticleContainer>
    );
  });

  return (
    <Wrapper>
      <PostBtn to="/thoughts/post">POST</PostBtn>
      {renderArticles}
      <InView
        as="div"
        onChange={(inview, entry) => inview && fetchNextPage()}
      ></InView>
    </Wrapper>
  );
};
