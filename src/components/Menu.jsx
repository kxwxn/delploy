import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2em;
`;

const SocialMedia = styled.a``;

const ProfileIcon = styled(Link)``;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  /* ${(props) =>
    props.github &&
    `
    border-radius:50%
  `}
  ${(props) =>
    props.linkedin &&
    `
    border-radius:50%
  `} */
`;
const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownMenu} {
    display: block;
  }
`;

const MenuIcon = styled.span``;

export const Menu = () => {
  return (
    <Wrapper>
      <Dropdown>
        <MenuIcon>
          <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Fellipsis.png?alt=media&token=0a63db15-6b1a-4978-bef8-b1bedf23efc8" />
        </MenuIcon>
        <DropdownMenu>
          <ProfileIcon to="/profile">
            <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Faccount.png?alt=media&token=2c97de21-f407-4850-b7fa-422a81f3ba4b" />
          </ProfileIcon>
          <SocialMedia href="https://github.com/kxwxn" target="_blank">
            <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Fgithub-logo.png?alt=media&token=111e7b3b-eae4-4041-a9b9-48cad8251492" />
          </SocialMedia>
          <SocialMedia
            href="https://www.linkedin.com/in/kiwon-kim-b593a8229/"
            target="_blank"
          >
            <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Flinkedin.png?alt=media&token=bea7500a-642f-4a3b-9594-b84443f4a737" />
          </SocialMedia>
          <SocialMedia href="https://www.instagram.com/n0wlk" target="_blank">
            <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Finstagram.png?alt=media&token=5b7aa231-0137-42d0-9550-a6d850c405fc" />
          </SocialMedia>
          <SocialMedia href="mailto:kxwxn@icloud.com" target="_blank">
            <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Farroba.png?alt=media&token=db5b874a-8cf9-41bb-8040-863f0f5eca88" />
          </SocialMedia>
        </DropdownMenu>
      </Dropdown>
    </Wrapper>
  );
};

//Profile Link 로 profile 로 갈수 있는 사람은 로그인이 된 사용자만, 아닐경우 Sign-up 페이지로 리다이렉트.
