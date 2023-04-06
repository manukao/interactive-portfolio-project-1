import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AgeCardContainerWrapper = styled.div`
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  border: 1px solid gray;
`;

const AgeCardContainer = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
`;

const RemainingDiv = styled.div`
  height: ${({ remainingHeight }) => remainingHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
`;

const AgeButtonBadgeContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AgeButtonBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const AgeButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  margin: 4px;
  cursor: pointer;
  user-select: none;
`;

const AgeValue = styled.p`
  user-select: none;
`;

const UsedDiv = styled.div`
  height: ${({ customHeightAge }) => customHeightAge};
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  witdh: 100%;
  opacity: 0.3;
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
