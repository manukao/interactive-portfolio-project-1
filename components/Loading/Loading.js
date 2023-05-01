import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SpinnerContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  backdrop-filter: blur(px);
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 3px solid var(--color-primary); /* Light grey */
  border-top: 3px solid var(--color-secondary); /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    loading && (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  );
}
