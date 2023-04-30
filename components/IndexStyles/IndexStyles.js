import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const MainBox = styled.div`
  position: fixed;
  bottom: 3rem;
  width: 100%;
  max-width: 48rem;
  height: 25vh;
  max-height: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

export const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  box-sizing: content-box;
  height: 100%;
  width: 100%;
  border-radius: 0.25rem;

  /* Custom scrollbar styles for WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--background-color);
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 0.25rem;
  }
  /* Custom scrollbar styles for Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--color-secondary) var(--background-color);
`;

export const CardSection = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  background-color: var(--background-color);
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
