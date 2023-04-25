import { useState } from "react";
import styled from "styled-components";
import { FaRegKeyboard } from "react-icons/fa";
import { FiUser, FiCode, FiMessageCircle } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";

const Container = styled.div`
  position: fixed;
  bottom: 35%;
  right: 12px;
  width: ${(props) => (props.isShrinkView ? "32px" : "100px")};
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  user-select: none;
`;

const ViewButton = styled.button`
  background-color: transparent;
  color: var(--color-primary);
  opacity: 0.5;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  position: absolute;
  left: -25px;
  z-index: 10;
  outline: none;
  transform: ${(props) =>
    props.isShrinkView ? "rotate(0deg)" : "rotate(180deg)"};
  transition: transform 0.1s ease;
  &:hover {
    opacity: 1;
    scale: 1.1;
    color: var(--color-secondary);
  }
  &:active {
    scale: 0.9;
  }
`;

const Icon = styled.div`
  fill: var(--color-primary);
  width: 16px;
  height: 16px;
`;

const NavLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: var(--color-primary);
  opacity: 0.5;
  &:hover {
    color: var(--color-secondary);
    scale: 1.1;
    opacity: 1;
  }
  &:active {
    scale: 0.9;
  }
`;

export default function Sidebar() {
  const [isShrinkView, setIsShrinkView] = useState(true);
  //const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  //const handleThemeChange = () => {
  //  setIsDarkMode(!isDarkMode);
  //  document.body.classList.toggle("dark");
  //};

  return (
    <Container isShrinkView={isShrinkView}>
      <ViewButton
        type="button"
        aria-label={isShrinkView ? "Expand Sidebar" : "Shrink Sidebar"}
        title={isShrinkView ? "Expand" : "Shrink"}
        onClick={handleSidebarView}
        isShrinkView={isShrinkView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </ViewButton>
      <NavLinkWrapper href="#about" role="link" aria-label="About">
        <Icon>
          <FiUser size aria-hidden="true" />
        </Icon>
        {!isShrinkView && ".about"}
      </NavLinkWrapper>
      <NavLinkWrapper href="#skills" role="link" aria-label="Skills">
        <Icon>
          <FaRegKeyboard size aria-hidden="true" />
        </Icon>
        {!isShrinkView && ".skills"}
      </NavLinkWrapper>
      <NavLinkWrapper href="#projects" role="link" aria-label="Projects">
        <Icon>
          <FiCode size aria-hidden="true" />
        </Icon>
        {!isShrinkView && ".projects"}
      </NavLinkWrapper>
      <NavLinkWrapper href="#contact" role="link" aria-label="Contact">
        <Icon>
          <IoChatbubblesOutline size aria-hidden="true" />
        </Icon>
        {!isShrinkView && ".contact"}
      </NavLinkWrapper>
    </Container>
  );
}
