import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
  max-height: 100vh;
  flex-direction: column;
  transition: color 200ms;
  background-color: black;
  font-size: 1rem;
  }

/* ProjectsCard custom flash class on index change */
.flash {
  animation-name: flash;
  animation-duration: 3s;
}

@keyframes flash {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

/* TestimonialsCard custom marquee scroll */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
`;
