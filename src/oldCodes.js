// import { Spotify } from "react-spotify-embed";
// import { useRecoilState } from "recoil";
// import styled from "styled-components";
// import { SpotifyAtom } from "../recoil/SpotifyAtom";
// import { auth, db } from "../firebase";
// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
//   limit,
//   onSnapshot,
//   orderBy,
//   query,
//   startAfter,
// } from "firebase/firestore";
// import { useEffect, useRef, useState } from "react";

// const Wrapper = styled.div``;
// const SpotifyContainer = styled.div``;
// const SpotifyCard = styled(Spotify)``;
// const Text = styled.div``;
// const Genre = styled.div``;
// const DeleteBtn = styled.button``;

// export const Party = () => {
//   const [SpotifyFirestore, setSpotifyFirestore] = useRecoilState(SpotifyAtom);
//   const [lastDoc, setLastDoc] = useState(null);
//   const loadingRef = useRef(false);

//   const fetchSpotifyCardData = async (startAfterDoc = null) => {
//     if (loadingRef.current) return;
//     loadingRef.current = true;

//     let queryList = query(
//       collection(db, "M"),
//       orderBy("createdAt", "desc"),
//       limit(9)
//     );

//     if (startAfterDoc) {
//       queryList = query(
//         collection(db, "M"),
//         orderBy("createdAt", "desc"),
//         startAfter(startAfterDoc),
//         limit(9)
//       );
//     }
//     const querySnapshot = await getDocs(queryList);

//     if (querySnapshot.empty) {
//       loadingRef.current = false;
//       return;
//     }

//     const queryFinalData = querySnapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() };
//     });

//     setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
//     setSpotifyFirestore((prev) => [...prev, ...queryFinalData]);
//     loadingRef.current = false;
//   };

//   useEffect(() => {
//     fetchSpotifyCardData();

//     return () => setSpotifyFirestore([]);
//   }, []);

//   useEffect(() => {
//     const handleScroll = async () => {
//       if (
//         window.innerHeight + window.screenY >=
//         document.body.offsetHeight - 500
//       ) {
//         await fetchSpotifyCardData(lastDoc);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastDoc]);

//   const onDelete = async (docID) => {
//     if (window.confirm("Are you sure?")) {
//       await deleteDoc(doc(db, "M", docID));
//       setSpotifyFirestore((prev) => prev.filter((doc) => doc.id !== docID));
//     }
//   };

//   const ContainerRender = SpotifyFirestore.map((item, index) => {
//     const isUser = auth.currentUser.uid === item.author;
//     return (
//       <SpotifyContainer key={index}>
//         <SpotifyCard link={item.title} />
//         <Genre>{item.genre}</Genre>
//         <Text>{item.text}</Text>
//         {isUser && (
//           <DeleteBtn onClick={() => onDelete(item.id)}>delete</DeleteBtn>
//         )}
//       </SpotifyContainer>
//     );
//   });
//   return <Wrapper>{ContainerRender}</Wrapper>;
// };

// Party는 사용자가 spotify,apple music share 링크를 사용하여 작성한 게시물들이 보여지는 곳이다.
// Grid css

// firestore에서 가져온 데이터로 map 하여 렌더링한다.
// 삭제버튼 구현
// 무한스크롤로 스크롤 할때 마다 새로운 페이지가 연속적으로 렌더링 된다.
// recoil 로 상태관리
