import styled from "styled-components";
import Link from "next/link";
import Logo from "./Logo";
import developer from "../developer";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  color: var(--color-primary);
  position: fixed;
  top: 0;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    gap: 0.5rem;
  }

  li {
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: var(--color-primary);
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  text-decoration: none;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
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

export default function Header() {
  return (
    <HeaderContainer>
      <Logo logoText={developer.logoText} />
      <Nav>
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="#projects">Blog</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}
