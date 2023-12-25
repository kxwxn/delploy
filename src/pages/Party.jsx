import styled from "styled-components";
import { db } from "../firebase";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Spotify } from "react-spotify-embed";

const Wrapper = styled.div``;
const PartyList = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 2rem;
`;
const PostLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 900;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SpotifyCard = styled(Spotify)``;

const Genre = styled.div`
  font-weight: 200;
  font-size: 0.9rem;
`;

const Text = styled.div`
  font-weight: 150;
  font-size: 0.6rem;
`;

export const Party = () => {
  const [mlist, setMlist] = useState([]);

  useEffect(() => {
    let unsubscribe = null;
    const fetchList = async () => {
      const q = query(
        collection(db, "M"),
        orderBy("createdAt", "desc"),
        limit(10)
      );
      unsubscribe = await onSnapshot(q, (snapshot) => {
        const listSnapshot = snapshot.docs.map((doc) => {
          const { title, createaAt, id, genre, text, author } = doc.data();
          return { title, createaAt, id, genre, text, author };
        });
        setMlist(listSnapshot);
      });
    };
    fetchList();
  }, []);

  const listRender = mlist.map((item, index) => {
    return (
      <CardContainer key={index}>
        <SpotifyCard link={item.title} frameBorder="0" />
        <Genre>{item.genre}</Genre>
        <Text>{item.text}</Text>
      </CardContainer>
    );
  });

  return (
    <Wrapper>
      <PostLink to="/party/post">archiving</PostLink>
      <Outlet />
      <PartyList>{listRender}</PartyList>
    </Wrapper>
  );
};

// Party는 사용자가 spotify,apple music share 링크를 사용하여 작성한 게시물들이 보여지는 곳이다.
// Grid css
// firestore에서 가져온 데이터로 map 하여 렌더링한다.
// 무한스크롤로 스크롤 할때 마다 새로운 페이지가 연속적으로 렌더링 된다.
