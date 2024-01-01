import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100dvh;
  overflow: hidden;
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
  overflow-y: auto; /* 스크롤바 표시 */
  flex-grow: 1; /* 남은 공간 채우기 */
  min-height: 0; /* Wrapper의 대부분 차지하도록 초기 크기 설정 */
  border: none;
  outline: none;
  text-transform: none !important;
  font-size: ${(props) => props.fontSize};
`;
const Bottom = styled.div``;
const DeployBtn = styled.button``;
const BackBtn = styled.button``;

export const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  const handleBack = () => {
    navigate("/thoughts");
  };

  return (
    <Wrapper>
      <TitleArea
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ContentArea
        placeholder="Thought..."
        value={content}
        onChange={(value) => setContent(value)}
      />
      <Bottom>
        <BackBtn onClick={handleBack}>Cancel</BackBtn>
        <DeployBtn onClick={handleSubmit}>Publish</DeployBtn>
      </Bottom>
    </Wrapper>
  );
};
