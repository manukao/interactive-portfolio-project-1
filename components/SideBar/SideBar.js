import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaRegKeyboard } from "react-icons/fa";
import { FiUser, FiCode } from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";

const Container = styled.div`
  position: fixed;
  bottom: 35%;
  right: 12px;
  width: ${(props) => (props.isShrinkView ? "32px" : "100px")};
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  user-select: none;
`;

const ViewButton = styled.button`
  background-color: transparent;
  color: var(--color-primary);
  opacity: 0.8;
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
  height: 16px;
  width: 16px;
  transition: all 0.2s ease;
`;

const NavLinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: var(--color-primary);
  opacity: 0.8;
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

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

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
        <Icon isShrinkView={isShrinkView}>
          <FiUser size={isShrinkView ? 16 : 20} aria-hidden="true" />
        </Icon>
        {!isShrinkView && ".about"}
      </NavLinkWrapper>
      <NavLinkWrapper href="#skills" role="link" aria-label="Skills">
        <Icon>
          <FaRegKeyboard size={isShrinkView ? 16 : 20} aria-hidden="true" />
        </Icon>
        {!isShrinkView && ".skills"}
      </NavLinkWrapper>
      <NavLinkWrapper href="#projects" role="link" aria-label="Projects">
        <Icon>
          <FiCode size={isShrinkView ? 16 : 20} aria-hidden="true" />
        </Icon>
        {!isShrinkView && ".projects"}
      </NavLinkWrapper>
      <NavLinkWrapper href="#contact" role="link" aria-label="Contact">
        <Icon>
          <IoChatbubblesOutline
            size={isShrinkView ? 16 : 20}
            aria-hidden="true"
          />
        </Icon>
        {!isShrinkView && ".contact"}
      </NavLinkWrapper>
    </Container>
  );
}
