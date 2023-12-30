import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

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
const ContentArea = styled(MDEditor)`
  resize: none;
  height: 90dvh;
  border: none;
  outline: none;
  font-size: ${(props) => props.fontSize};
`;
const Bottom = styled.div``;
const DeployBtn = styled.button``;
const BackBtn = styled.button``;
const DraftSaveBtn = styled.button``;

export const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fontSize, setFontsize] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const sendPostToFirestore = async (data) => {
    await addDoc(collection(db, "Projects"), {
      author: user ? user.uid : null,
      title: data.title,
      content: data.content,
      createdAt: serverTimestamp(),
    });
  };

  const mutation = useMutation({
    mutationFn: sendPostToFirestore,
    onSuccess: () => {
      console.log("success!");
      setTitle("");
      setContent("");
      navigate("/thoughts");
    },
    onError: (err) => {
      console.log("Failed...:", err);
    },
  });

  // console.log("user", user);

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
        <ContentArea
          placeholder="Thought..."
          value={content}
          onChange={(value) => setContent(value)}
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
