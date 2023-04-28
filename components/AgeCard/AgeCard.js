import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AgeCardContainerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;
`;

const AgeCardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: var(--primary-color);
  z-index: 10;
  width: 40%;
`;

const AgeCardDescriptionText = styled.p`
  padding: 12px 12px;
`;

const AgeCardContainer = styled.div`
  position: relative;
  text-align: center;
  height: 90%;
  width: 40%;
  border-radius: 0.25rem;
  background-color: var(--bg-secondary-color);
`;

const RemainingDiv = styled.div`
  height: ${({ remainingHeight }) => remainingHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  font-size: xx-small;
`;

const AgeButtonBadgeContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const AgeButtonBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AgeButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid;
  border-radius: var(--border-radius);
  margin: 4px;
  cursor: pointer;
  user-select: none;
`;

const AgeValue = styled.p`
  user-select: none;
`;

const UsedDiv = styled.div`
  height: ${({ customHeightAge }) => customHeightAge};
  background-color: var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  border-radius: 0.25rem;
  font-size: xx-small;
`;

export default function AgeCard({ ageOfDeveloper }) {
  const [age, setAge] = useState(ageOfDeveloper);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const daysPerYear = 365;
    const timeRemaining = (100 - age) * daysPerYear;
    setTimeRemaining(timeRemaining);
  }, [age]);

  let remainingHeight = `${100 - age}%`;
  let customHeightAge = `${age}%`;
  let usedDays = age * 365;

  function handleAgeDecrease() {
    if (age > 1) {
      setAge(age - 1);
    }
  }

  function handleAgeIncrease() {
    if (age < 99) {
      setAge(age + 1);
    }
  }

  return (
    <AgeCardContainerWrapper>
      <AgeCardDescription>
        <AgeCardDescriptionText>
          Time`s precious. Enter your age.
        </AgeCardDescriptionText>
      </AgeCardDescription>
      <AgeCardContainer>
        <RemainingDiv remainingHeight={remainingHeight}>
          {timeRemaining > 0 && (
            <p>
              ~{timeRemaining} days until 100 y/o<span>...</span>
            </p>
          )}
        </RemainingDiv>
        <AgeButtonBadgeContainer>
          <AgeButtonBadge>
            <AgeButton onClick={handleAgeDecrease}>-</AgeButton>
            <AgeValue>Age: {age}</AgeValue>
            <AgeButton onClick={handleAgeIncrease}>+</AgeButton>
          </AgeButtonBadge>
        </AgeButtonBadgeContainer>
        <UsedDiv customHeightAge={customHeightAge}>
          {timeRemaining > 0 && <p>~{usedDays} days used.</p>}
        </UsedDiv>
      </AgeCardContainer>
    </AgeCardContainerWrapper>
  );
}
