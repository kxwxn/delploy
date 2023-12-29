import { useState } from "react";
import { styled } from "styled-components";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";

const Wrapper = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const TitleArea = styled.textarea`
  height: 50px;
  resize: none;
  border: none;
  outline: none;
  font-size: xxx-large;
`;
const ContentArea = styled.textarea`
  resize: none;
  height: 90dvh;
  border: none;
  outline: none;
  font-size: ${(props) => props.fontSize};
`;
const ToolBar = styled.div`
  display: flex;
  background-color: white;
`;
const SmallFontSizeBtn = styled.button`
  background: url("https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Ftext.png?alt=media&token=4d9b09fd-ea8b-48fc-a06b-589e0cf77ed7")
    no-repeat center bottom;
  background-size: 14px;
  width: 20px;
  height: 20px;
  border: none;
  font-size: ${(props) => props.fontSize};
`;
const MediumFontSizeBtn = styled.button`
  background: url("https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Ftext.png?alt=media&token=4d9b09fd-ea8b-48fc-a06b-589e0cf77ed7")
    no-repeat center bottom;
  background-size: 16px;
  width: 20px;
  height: 20px;
  border: none;
  font-size: ${(props) => props.fontSize};
`;
const LargeFontSizeBtn = styled.button`
  background: url("https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Ftext.png?alt=media&token=4d9b09fd-ea8b-48fc-a06b-589e0cf77ed7")
    no-repeat center bottom;
  background-size: 18px;
  width: 20px;
  height: 20px;
  border: none;
  font-size: ${(props) => props.fontSize};
`;
const XlargeFontSizeBtn = styled.button`
  background: url("https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Ftext.png?alt=media&token=4d9b09fd-ea8b-48fc-a06b-589e0cf77ed7")
    no-repeat center bottom;
  background-size: 20px;
  width: 20px;
  height: 20px;
  border: none;
  font-size: ${(props) => props.fontSize};
`;
const ImageUploadBtn = styled.button`
  background: url("https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Fphoto.png?alt=media&token=37f9393c-62ce-4cea-8c67-1cbe89bffbfa")
    no-repeat center bottom;
  background-size: 21px;
  width: 21px;
  height: 21px;
  border: none;
`;
const LinkUploadBtn = styled.button`
  background: url("https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Flink.png?alt=media&token=604e455a-bbac-4689-ac50-a9a72e44a4ba")
    no-repeat center bottom;
  background-size: 20px;
  width: 20px;
  height: 20px;
  border: none;
`;

const Bottom = styled.div``;
const DeployBtn = styled.button``;
const BackBtn = styled.button``;
const DraftSaveBtn = styled.button``;

export const BlogPost = () => {
  //  title 과 content에서 사용자가 입력한 데이터를 react query 를 이용해서 firestore에 보낸다.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fontSize, setFontsize] = useState("");

  const sendPostToFirestore = async (data) => {
    await addDoc(collection(db, "Projects"), {
      title: data.title,
      content: data.content,
      createdAt: serverTimestamp(),
    });
  };

  const mutation = useMutation({
    mutationFn: sendPostToFirestore,
    onSuccess: () => {
      console.log("success!");
    },
    onError: () => {
      console.log("Failed...");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, content });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <TitleArea
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ToolBar>
          <SmallFontSizeBtn
            onClick={() => {
              setFontsize("small");
            }}
          />
          <MediumFontSizeBtn
            onClick={() => {
              setFontsize("medium");
            }}
          />
          <LargeFontSizeBtn
            onClick={() => {
              setFontsize("large");
            }}
          />
          <XlargeFontSizeBtn
            onClick={() => {
              setFontsize("xx-large");
            }}
          />
          <ImageUploadBtn />
          <LinkUploadBtn />
        </ToolBar>
        <ContentArea
          placeholder="Thought..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fontSize={fontSize}
        />
        <Bottom>
          <BackBtn>Back</BackBtn>
          <DraftSaveBtn>Draft</DraftSaveBtn>
          <DeployBtn type="submit">Deploy</DeployBtn>
        </Bottom>
      </Form>
    </Wrapper>
  );
};
