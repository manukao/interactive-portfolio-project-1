import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem;
  width: 100%;
  max-width: 48rem;
  height: 25vh;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  color: var(--color-primary);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  padding: 4px 8px;
  opacity: 0.8;

  &:hover {
    color: var(--color-secondary);
    scale: 1.1;
    opacity: 1;
  }

  &:active {
    color: var(--color-secondary);
    scale: 0.9;
  }
`;

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
}
