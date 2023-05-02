import styled, { keyframes } from "styled-components";

const LogoBadge = styled.h1``;

const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;
  user-select: none;
`;

const LogoText = styled.div`
  opacity: 0.8;
  display: flex;
  -webkit-background-clip: text;
  color: var(--color-secondary);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 1;
  }
`;

export default function Logo({ logoText }) {
  return (
    <>
      <LogoBadge>
        <LogoLink href="/" aria-label="Home">
          <LogoText>{logoText}</LogoText>
        </LogoLink>
      </LogoBadge>
    </>
  );
}
