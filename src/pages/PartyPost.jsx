import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const SubmitBtn = styled.button``;
const TextArea = styled.textarea``;
const Select = styled.select``;
const Option = styled.option``;

export const PartyPost = () => {
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [text, setText] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();


  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onUrlChange = (e) => {
    setSpotifyUrl(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user || text === "") return;
    try {
      const doc = await addDoc(collection(db, "M"), {
        createdAt: Date.now(),
        author: user.uid,
        text: text,
        title: spotifyUrl,
        genre: genre,
      });
      navigate("/party");
    } catch (err) {
      console.log(err);
    }

    // console.log("genre", genre, "text", text, "spotify", spotifyUrl);
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="spotify url"
          value={spotifyUrl}
          onChange={onUrlChange}
        />
        <Select value={genre} onChange={handleGenreChange}>
          <Option disabled>
            wot u saying?
          </Option>
          <Option value="m1">Happiness</Option>
          <Option value="m2">Anger</Option>
          <Option value="m3">Sadness</Option>
          <Option value="m4">Excitement</Option>
          <Option value="m5">Love</Option>
          <Option value="m6">Joy</Option>
          <Option value="m7">Fear</Option>
          <Option value="m8">Astonishment</Option>
        </Select>
        <TextArea
          placeholder="Your thought?"
          value={text}
          onChange={onTextChange}
        />
        <SubmitBtn type="submit">post</SubmitBtn>
      </Form>
    </Wrapper>
  );
};
