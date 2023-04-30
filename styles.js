import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: rgb(225 225 225);
    --color-secondary: rgb(2 238 139);
    --color-secondary-shadow: RGB(0, 187, 88);
    --border-radius: 0.25rem;
    --background-color: rgba(32, 32, 32, 0.8);
    --bg-secondary-color: rgba(64, 64, 64, 0.5);
  }

  ::selection {
    background-color: var(--color-secondary);
  }

  a:active {
    background-color: var(--color-secondary);
  }

  html {
    font-family: Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    margin: 0;
    top: 3rem;
    font-size: small;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    transition: color 200ms;
    background-color: var(--background-color);
    color: var(--color-primary);
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

/* Typewriter */
//@keyframes typewriter {
//  from {
//    width: 0;
//  }
//  to {
//    width: 100%;
//  }
//}
//
//@keyframes blink-caret {
//  50% {
//    border-color: transparent;
//  }
//}
//
//`;
