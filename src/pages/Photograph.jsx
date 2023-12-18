import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";
import Draggable from "react-draggable";

const Wrapper = styled.div``;
const Frame = styled.div``;
const Photo = styled.img`
  width: 120px;
  height: 300px;
`;

export const Photograph = () => {
  const [picture, setPicture] = useState([]);

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
      <Frame>
        <Photo src={photo.uri} alt={photo.id} />
        <div>Price:{photo.price}</div>
      </Frame>
    );
  });

  return <Wrapper>{renderPhoto}</Wrapper>;
};

