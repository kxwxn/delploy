import { styled } from "styled-components";

const Wrapper = styled.div``;

export const M = (props) => {
  const { title, content } = props;

  return (
    <Wrapper>
      {title}
      <h1>{content}</h1>
    </Wrapper>
  );
};
