import { styled } from "styled-components";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Spotify } from "react-spotify-embed";
import { InView } from "react-intersection-observer";

const Wrapper = styled.div``;
const SpotifyContainer = styled.div``;
const SpotifyCard = styled(Spotify)``;
const Genre = styled.div``;
const Text = styled.div``;

export const Party = () => {
  const {
    data: spotifyData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteScroll("M", 9);

  console.log(spotifyData)

  if (isLoading) return <div>Loading...</div>;
  if (isError) return window.alert(`An error occured${error.message}`);

  const deleteBtn = () => {};

  const renderSpotify = spotifyData.pages.flatMap((page) => {
    return page.data.map((item, index) => {
      return (
        <SpotifyContainer key={index}>
          <SpotifyCard link={item.title} />
          <Genre>{item.genre}</Genre>
          <Text>{item.text}</Text>
        </SpotifyContainer>
      );
    });
  });
  
  return (
    <Wrapper>
      {renderSpotify}
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
