import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: rgb(255 255 255);
    --color-secondary: rgb(2 238 139);
    --border-radius: 0.25rem;
    --background-color: rgba(32, 32, 32, 0.8);
    --bg-secondary-color: rgba(64, 64, 64, 0.8);
    --tw-text-opacity: 1;
    --tw-bg-opacity: 1;
  }

  body {
    margin: 0;
    font-family: system-ui;
    overflow: hidden;
    display: flex;
    height: 100%;
    max-height: 100vh;
    flex-direction: column;
    transition: color 200ms;
    background-color: rgb(32 32 32/var(--tw-bg-opacity));
    color: var(--color-primary);
    font-size: small;
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
