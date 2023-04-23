import styled, { keyframes } from "styled-components";

const LogoBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LogoText = styled.h1`
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    var(--color-secondary),
    var(--color-primary),
    var(--color-secondary)
  );

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
        <LogoText className="animate-text">{logoText}</LogoText>
      </LogoBadge>
    </>
  );
}
