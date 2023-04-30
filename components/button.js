import React from "react";
import styled from "styled-components";

const Pushable = styled.button`
  position: relative;
  opacity: 0.8;
  border: none;
  background: transparent;
  padding: 0;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    opacity: 1;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${Pushable}:hover & {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Pushable}:active & {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  background: linear-gradient(
    to left,
    var(--background-color) 0%,
    var(--color-secondary-shadow) 4%,
    var(--color-secondary-shadow) 96%,
    var(--background-color) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 4px 16px;
  border-radius: var(--border-radius);
  color: var(--color-primary);
  background: var(--color-secondary);
  will-change: transform;
  transform: translateY(-3px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${Pushable}:hover & {
    transform: translateY(-4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Pushable}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
`;

const CoolButton = ({ buttonContent }) => (
  <Pushable>
    <Shadow />
    <Edge />
    <Front>{buttonContent}</Front>
  </Pushable>
);

export default CoolButton;
