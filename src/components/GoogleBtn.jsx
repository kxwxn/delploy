import { styled } from "styled-components";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Button = styled.button``;
const Logo = styled.img``;

export const GoogleBtn = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Fweb_dark_rd_ctn%401x.png?alt=media&token=c833c9a9-0d05-4bad-9af4-dfad3dc67e4c" />
    </Button>
  );
};
