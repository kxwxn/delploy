import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { signOut } from "../services/signService";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2em;
`;

const SocialMedia = styled.a``;

const ProfileIcon = styled(Link)``;

const Img = styled.img`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &.loginIcon {
    width: 2.7rem;
    height: 2.7rem;
  }

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

const SignOut = styled.button`
  border-style: none;
  background: none;
`;

const SignIn = styled(Link)`
  border-style: none;
  background: none;
  position: relative;
  top: -5px;
  left: -0.5rem;
`;

export const Menu = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

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
          {user ? (
            <SignOut onClick={signOut}>
              <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Flogout.png?alt=media&token=e391595b-d66c-4a02-b7e6-6e9735fb3491" />
            </SignOut>
          ) : (
            <SignIn to="/signup">
              <Img
                className="loginIcon"
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2FPNG%2Flog-in.png?alt=media&token=c06ef8c4-499a-491c-8e3c-a1fef0df6ab5"
              />
            </SignIn>
          )}
        </DropdownMenu>
      </Dropdown>
    </Wrapper>
  );
};

//Profile Link 로 profile 로 갈수 있는 사람은 로그인이 된 사용자만, 아닐경우 Sign-up 페이지로 리다이렉트.
