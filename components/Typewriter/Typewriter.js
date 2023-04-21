import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

import styled from "styled-components";

const TypewriterText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid;
  visibility: hidden;

  &.typewriter-animation {
    visibility: visible;
    animation: typewriter 4s steps(40, end) 1s 1 normal both,
      blink-caret 0.75s steps(1, end) infinite;
  }

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    50% {
      border-color: transparent;
    }
  }
`;

const Typewriter = ({ text }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <TypewriterText
      ref={ref}
      className={`typewriter-text ${onScreen ? "typewriter-animation" : ""}`}
    >
      {text}
    </TypewriterText>
  );
};

export default Typewriter;
