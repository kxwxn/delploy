import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { onSigninSubmit, onSignupSubmit } from "../services/signService";
import { GoogleBtn } from "../components/GoogleBtn";

const Wrapper = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const SignupBtn = styled.button``;
const SigninBtn = styled.button``;

export const SignUP = () => {
  const navigate = useNavigate();
  const [signinId, setSigninId] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [signupId, setSignupId] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    await onSigninSubmit(signinId, signinPassword, navigate);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await onSignupSubmit(signupId, signupPassword, navigate);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSignin}>
        <Input
          name="inId"
          value={signinId}
          placeholder="email"
          type="email"
          onChange={(e) => setSigninId(e.target.value)}
        />
        <Input
          name="inPassword"
          value={signinPassword}
          placeholder="password"
          type="password"
          onChange={(e) => setSigninPassword(e.target.value)}
        />
        <SigninBtn children="Sign in" type="submit" />
      </Form>
      <Form onSubmit={handleSignup}>
        <Input
          name="upId"
          value={signupId}
          placeholder="email"
          type="email"
          onChange={(e) => setSignupId(e.target.value)}
        />
        <Input
          name="upPassword"
          value={signupPassword}
          placeholder="password"
          type="password"
          onChange={(e) => setSignupPassword(e.target.value)}
        />
        <SignupBtn type="submit" children="Sign up" />
        <GoogleBtn />
      </Form>
    </Wrapper>
  );
};
