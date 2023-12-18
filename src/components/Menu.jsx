import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: inline-block;
  top: 2rem;
  right: 2rem;
  z-index: 1;
`;

const MenuLink = styled(Link)`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

const Icon = styled.svg`
  width: 1rem;
  height: 1rem;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background: #f9f9f9;
  padding: 12px 16px;
  z-index: 1;
`;

export const Menu = () => {
  return (
    <Wrapper>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5" // 수정: stroke-width 대신 strokeWidth로 변경
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        className="w-6 h-6" // 수정: class 대신 className으로 변경
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </Icon>

      <DropdownMenu>
        <MenuLink
          to="/profile"
          id="profile"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2F1144760.png?alt=media&token=0fa84749-b514-4665-aeb8-148ed1b494d1"
        />
        <MenuLink
          to="https:instagram.com/n0wlk"
          id="insta"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Fpng-transparent-logo-instagram-text-logo-number-thumbnail.png?alt=media&token=b0a9100b-fd1e-45a5-862f-13227b8da379"
        />
        <MenuLink
          to="https://github.com/kxwxn"
          id="github"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Fpng-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png?alt=media&token=1d5b659c-6baa-41a0-9f22-25d88a5d2084"
        />
        <MenuLink
          to="https://www.linkedin.com/in/kiwon-kim-b593a8229/"
          id="linkedIn"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/portfolio-e296e.appspot.com/o/logo%2Fpng-transparent-in-logo-linkedin-facebook-social-media-font-awesome-icon-linkedin-blue-text-trademark-thumbnail.png?alt=media&token=542d4f1c-14b0-47e2-836e-b6ff6b00387c"
        />
      </DropdownMenu>
    </Wrapper>
  );
};
