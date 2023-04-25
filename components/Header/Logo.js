import styled, { keyframes } from "styled-components";

const LogoBadge = styled.h1`
  padding-bottom: 4px;
  font-size: xx-large;
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LogoText = styled.div`
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    var(--color-secondary),
    var(--color-primary),
    var(--color-secondary)
  );

  &:hover {
    opacity: 1;
  }

  &.animate-text {
    animation: ${gradientAnimation} 5s ease infinite;
    background-size: 400% 400%;
    animation-name: ${gradientAnimation};
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
  }

  @keyframes ${gradientAnimation} {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default function Logo({ logoText }) {
  return (
    <>
      <LogoBadge>
        <LogoLink href="/">
          <LogoText className="animate-text">{logoText}</LogoText>
        </LogoLink>
      </LogoBadge>
    </>
  );
}
