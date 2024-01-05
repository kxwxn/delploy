import { Link } from "react-router-dom";
import styled from "styled-components";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { InView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { articleState } from "../recoil/atoms/articleState";
import { useEffect } from "react";
import { ThreeCard } from "../components/\bThreeCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Article = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 100%;
`;

const Title = styled(Link)`
  font-size: 1rem;
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
    console.log(article)
  };

  const renderArticles = purifiedContainer.map((item, index) => {
    return (
      <ThreeCard
        key={index}
        item={item}
        to={`/thoughts/${item.id}`}
        onClick={() => handleArticleClick(item)}
      />
    );
  });

  return (
    <Wrapper>
      <Header>
        <PostBtn to="/thoughts/post">POST</PostBtn>
      </Header>
      <ArticleContainer>{renderArticles}</ArticleContainer>
      <InView
        as="div"
        onChange={(inview, entry) => inview && fetchNextPage()}
      ></InView>
    </Wrapper>
  );
};
