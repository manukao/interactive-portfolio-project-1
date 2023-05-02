import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LifeCalendarDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: var(--primary-color);
  z-index: 10;
  width: 50%;
  user-select: none;
`;

const DescriptionEmphasis = styled.span`
  font-weight: bold;
  color: var(--color-secondary);
`;

const LifeCalendarDescriptionText = styled.p`
  padding: 12px 12px;
`;

const LifeCalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 12px);
  grid-template-rows: repeat(10, 12px);
  grid-gap: 1px;
`;

const YearBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 0.1rem;
  background-color: ${({ elapsed }) =>
    elapsed ? "var(--color-secondary)" : "var(--color-primary)"};
  ${({ progress }) =>
    progress &&
    `background-image: linear-gradient(90deg, var(--color-secondary) ${progress}%, var(--color-primary) ${progress}%);`}
  transition: background-image 0.2s ease-out;
`;

const OpenButton = styled.button`
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.9;
  }
`;

const calculateAgeAndProgress = (birthdate) => {
  const birth = new Date(birthdate);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();
  const isPassedBirthday = today.getDate() >= birth.getDate();
  const progress =
    (isPassedBirthday ? monthDifference : monthDifference - 1) / 12;

  if (monthDifference < 0 || (monthDifference === 0 && !isPassedBirthday)) {
    return { age: age - 1, progress: 1 + progress };
  }
  return { age, progress };
};

export default function LifeCalendar({ birthdate, onOpenModal }) {
  const [ageAndProgress, setAgeAndProgress] = useState({ age: 0, progress: 0 });
  const [elapsedYears, setElapsedYears] = useState([]);

  useEffect(() => {
    const { age: currentAge, progress: currentProgress } =
      calculateAgeAndProgress(birthdate);
    const elapsedYearsCount = elapsedYears.length;
    const newElapsedYearsCount = Math.floor(currentAge) + 1;

    if (newElapsedYearsCount < elapsedYearsCount) {
      setElapsedYears((prevYears) => prevYears.slice(0, newElapsedYearsCount));
    } else {
      const interval = setInterval(() => {
        setElapsedYears((prevYears) => {
          const lastYearIndex = prevYears.length - 1;
          if (lastYearIndex >= currentAge) {
            clearInterval(interval);
            return prevYears;
          }
          return [...prevYears, { elapsed: true }];
        });
      }, 100);
      return () => clearInterval(interval);
    }

    setAgeAndProgress({ age: currentAge, progress: currentProgress });
  }, [birthdate, elapsedYears]);

  const years = Array.from({ length: 100 }, (_, i) => {
    if (i < elapsedYears.length) return { elapsed: true };
    if (i === elapsedYears.length)
      return { elapsed: false, progress: ageAndProgress.progress * 100 };
    return { elapsed: false };
  });

  return (
    <Wrapper>
      <LifeCalendarDescription>
        <LifeCalendarDescriptionText>
          I like to remind myself from time to time that{" "}
          <DescriptionEmphasis>time is precious.</DescriptionEmphasis>
        </LifeCalendarDescriptionText>
        <OpenButton onClick={onOpenModal}>Show more</OpenButton>
      </LifeCalendarDescription>
      <LifeCalendarContainer>
        {years.map(({ elapsed, progress }, index) => (
          <YearBox key={index} elapsed={elapsed} progress={progress} />
        ))}
      </LifeCalendarContainer>
    </Wrapper>
  );
}
