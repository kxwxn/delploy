// import styled from "styled-components";
// import { auth, db } from "../firebase";
// import { Link } from "react-router-dom";
// import { useCallback, useEffect, useState } from "react";
// import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
// import {
//   collection,
//   deleteDoc,
//   limit,
//   onSnapshot,
//   orderBy,
//   query,
//   doc,
//   getDocs,
//   startAfter,
// } from "firebase/firestore";
// import { Spotify } from "react-spotify-embed";
// import { useRecoilState } from "recoil";
// import { SpotifyListAtom } from "../recoil/Matom";

// const Wrapper = styled.div``;
// const PartyList = styled.div`
//   box-sizing: border-box;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 1rem;
//   padding: 2rem;
// `;
// const PostLink = styled(Link)`
//   text-decoration: none;
//   color: black;
//   font-weight: 900;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const SpotifyCard = styled(Spotify)``;

// const Genre = styled.div`
//   font-weight: 200;
//   font-size: 0.9rem;
// `;

// const Text = styled.div`
//   font-weight: 150;
//   font-size: 0.6rem;
// `;

// const DeleteBtn = styled.button``;

// export const Party = () => {
//   const [mlist, setMlist] = useRecoilState(SpotifyListAtom);
//   const [lastDoc, setLastDoc] = useState(null);

//   const onDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       await deleteDoc(doc(db, "M", id));
//     }
//   };

//   const fetchList = useCallback(async (lastDocSnapshot) => {
//     let q = query(collection(db, "M"), orderBy("createdAt", "desc"), limit(10));

//     if (lastDocSnapshot) {
//       q = query(
//         collection(db, "M"),
//         orderBy("createdAt", "desc"),
//         startAfter(lastDocSnapshot),
//         limit(10)
//       );
//     }

//     const snapshot = await getDocs(q);
//     const listSnapshot = snapshot.docs.map((doc) => {
//       const { title, createdAt, genre, text, author } = doc.data();
//       const id = doc.id;
//       return { title, createdAt, id, genre, text, author };
//     });
//     setMlist((prevMlist) => [...prevMlist, ...listSnapshot]);
//     setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
//   });

//   useEffect(() => {
//     fetchList();
//   }, []);

//   useInfiniteScroll(() => fetchList(lastDoc));

//   const listRender = mlist.map((item, index) => {
//     console.log("item.id:", item.id);

//     const isAuthor = auth.currentUser?.uid === item.author;

//     return (
//       <CardContainer key={index}>
//         <SpotifyCard link={item.title} frameBorder="0" />

//         {/* {isAuthor ? (
//           <DeleteBtn onClick={() => onDelete(item.id)}>delete</DeleteBtn>
//         ) : null} */}

//         {isAuthor && (
//           <DeleteBtn onClick={() => onDelete(item.id)}>delete</DeleteBtn>
//         )}

//         <Genre>{item.genre}</Genre>
//         <Text>{item.text}</Text>
//       </CardContainer>
//     );
//   });

//   return (
//     <Wrapper>
//       <PartyList>{listRender}</PartyList>
//     </Wrapper>
//   );
// };
