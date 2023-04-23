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
    --bg-secondary-color: rgba(64, 64, 64, 0.5);
  }

  ::selection {
  background-color: var(--color-secondary);
}

a:active {
  background-color: var(--color-secondary);
}

  body {
    margin: 0;
    padding-top: 3rem;
    font-family: system-ui;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    transition: color 200ms;
    background-color: rgb(32 32 32);
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
