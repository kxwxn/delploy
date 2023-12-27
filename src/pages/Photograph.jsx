import styled from "styled-components";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { InView } from "react-intersection-observer";

const Wrapper = styled.div``;
const Frame = styled.div``;
const Photo = styled.img`
  width: 120px;
  height: 300px;
`;
const Price = styled.div``;

export const Photograph = () => {
  const {
    data: photo,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteScroll("Photo", 12);

  if (isLoading) return "Loading...";
  if (isError) return `An error occurred: ${error.message}`;

  const renderPhoto = photo.pages.flatMap((page, i) =>
    page.data.map((photo) => (
      <Frame key={photo.id}>
        <Photo src={photo.uri} alt={photo.id} />
        <Price>${photo.price}</Price>
      </Frame>
    ))
  );

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
