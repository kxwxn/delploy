import styled from "styled-components";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { InView } from "react-intersection-observer";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Photo = styled.img`
  width: 85%;
  height: auto;
`;
const Mark = styled.div``;

export const Photograph = () => {
  const {
    data: photosOfTokyo,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteScroll("Photo", 12);

  if (isLoading) return "Loading...";
  if (isError) return `An error occurred: ${error.message}`;

  const purifiedData = photosOfTokyo.pages.flatMap((page) => {
    return page.data;
  });

  const renderPhoto = purifiedData.map((item, index) => {
    return (
      <Frame key={index}>
        <Photo src={item.uri} />
        <Mark>
          {item.price},{index}
        </Mark>
      </Frame>
    );
  });

  return (
    <Wrapper>
      {renderPhoto}
      {hasNextPage && (
        <InView
          as="div"
          onChange={(inView, entry) => inView && fetchNextPage()}
        >
          Loading more...
        </InView>
      )}
    </Wrapper>
  );
};
