import React from "react";
import styled, { css } from "styled-components";

const Pushable = styled.button`
  position: relative;
  opacity: 0.7;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
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
    var(--color-secondary) 8%,
    var(--color-secondary) 92%,
    var(--background-color) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 8px 16px;
  border-radius: var(--border-radius);
  color: var(--color-primary);
  background: var(--color-secondary);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${Pushable}:hover & {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Pushable}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
`;

const CoolButton = () => (
  <Pushable>
    <Shadow />
    <Edge />
    <Front>
      send<span>⏎</span>
    </Front>
  </Pushable>
);

export default CoolButton;
