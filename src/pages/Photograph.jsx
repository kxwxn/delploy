import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useRecoilState } from "recoil";
import { PhotoAtom } from "../recoil/PhotoAtom";

const Wrapper = styled.div``;
const Frame = styled.div``;
const Photo = styled.img`
  width: 120px;
  height: 300px;
`;

export const Photograph = () => {
  const [picture, setPicture] = useRecoilState(PhotoAtom);

  const fetchPhoto = async () => {
    const photoCollection = collection(db, "Photo");
    const photoSnapshot = await getDocs(photoCollection);
    const photoList = photoSnapshot.docs.map((doc) => doc.data());
    setPicture(photoList);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  const renderPhoto = picture.map((photo, index) => {
    return (
      <Frame key={index}>
        <Photo src={photo.uri} alt={photo.id} />
        <div>Price:{photo.price}</div>
      </Frame>
    );
  });

  return <Wrapper>{renderPhoto}</Wrapper>;
};
