import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Alert = styled.div``;
const SignupLink = styled(Link)`
  vertical-align: middle;
  position: relative;
  top: 16.5px;
`;
const Img = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Redirection = () => {
  return (
    <Wrapper>
      <Alert>
        you better{" "}
        <SignupLink to="/signup">
          <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Fsignup.png?alt=media&token=4111b25f-fc81-4c39-923c-fa35ae378306" />
        </SignupLink>{" "}
        in if you wanna get involved, chur!
      </Alert>
    </Wrapper>
  );
};
