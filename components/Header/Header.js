import styled from "styled-components";
import Link from "next/link";
import Logo from "./Logo";
import developer from "../developer";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0 0.25rem;
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--color-primary);
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: var(--border-radius);
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
            <NavLink href="/#about">Home</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}
