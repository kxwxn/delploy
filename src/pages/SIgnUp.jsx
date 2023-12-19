import styled from "styled-components";

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const SignupBtn = styled.button``;
const LoginBtn = styled.button``;

export const SignUP = () => {
  return (
    <Wrapper>
      <Form login>
        <Input></Input>
        <Input></Input>
        <LoginBtn />
        <SignupBtn />
      </Form>
    </Wrapper>
  );
};
