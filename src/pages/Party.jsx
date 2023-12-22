import styled from "styled-components";
import { db } from "../firebase";
import { Link, Outlet } from "react-router-dom";

const Wrapper = styled.div``;
const PartyList = styled.div``;
const PostLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 900;
`;
const Index = styled.div``;

export const Party = () => {
  return (
    <Wrapper>
      <Outlet />
      <PartyList>list</PartyList>
      <Index>
        <PostLink to="/party/post">archiving</PostLink>
      </Index>
    </Wrapper>
  );
};

// 우선 게시판인 <Party/> 컴포넌트로 오면 거기에는 글의 목록(글제목이 보이고 15개로 제한, 넘어가면 다음페이지 생성 1,2,3...)이 보이고 제목을 클릭할시 그 글로 들어가져서 글의 내용을 읽을수 있음. 그다음은 글의 목록 밑에 post 라는 버튼을 두고 클릭시 글을 작성하는 페이지로 이동시키고 거기서 글을 작성후 post

// 1.Firestore에서 게시글을 가져와서 목록으로 보여주는 기능
// 2.각 게시글 제목을 클릭하면 해당 게시글의 상세 내용을 보여주는 기능
// 3."Post" 버튼을 클릭하면 게시글 작성 페이지로 이동하는 기능
// 4.게시글 작성 페이지에서 게시글을 작성하고 Firestore에 저장하는 기능

// 게시글 목록 페이지. Party.jsx
// 1. 파이어베이스 db에서 게시글을 불러온다.
// 2. 가져온 게시글들을 아래의 조건으로 보여준다.
// 1. 먼저 게시글을 15개로 제한한다.
// 2. 15개가 넘어가면 다음페이지에 표시 (1,2,3...) --> pagination
// 3. 화살표와 숫자로 페이지 이동
// 4. 게시글 검색창
// 5. 게시글 작성하러는곳(PartyPost.jsx)로 이동시키는 버튼

// 게시글 작성 페이지. PartyPost.jsx
// 1. 게시글 작성할수 있는 textarea태그
// 2. 게시글과 제목을 state에 받아서 db에 저장. 이때 작성시간,작성자,id,ip도 받아서 함께 저장.
