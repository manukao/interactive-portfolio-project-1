import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const ModalFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  user-select: none;
  padding-top: 12px;
`;

const ModalTitle = styled.div`
  font-weight: bold;
  color: var(--color-secondary);
`;

const ModalText = styled.div`
  color: var(--color-primary);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FormLabel = styled.label`
  color: var(--color-primary);
  margin-right: 0.25rem;
  font-size: x-small;
`;

const FormInput = styled.input`
  resize: none;
  color: var(--color-primary);
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
  border: none;
  padding: 4px;
  font-family: system-ui;

  &:focus {
    outline: solid 1px var(--color-secondary);
  }

  &::selection {
    background-color: var(--color-primary);
    color: var(--bg-secondary-color);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
`;

const ResetButton = styled.button`
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    color: var(--color-secondary);
    scale: 1.1;
  }

  &:active {
    color: var(--color-secondary);
    scale: 0.9;
  }
`;

const SaveButton = styled.button`
  background-color: var(--color-secondary);
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  color: var(--color-primary);
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.9;
  }
`;

export default function LifeCalendarModal({
  birthdate,
  onClose,
  onSave,
  onReset,
}) {
  const [formData, setFormData] = useState({ birthdate });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({ birthdate });
    onReset();
  };

  useEffect(() => {
    setFormData({ birthdate });
  }, [onReset, birthdate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <ModalFormContainer>
      <ModalTitle>Life in boxes</ModalTitle>
      <ModalText>
        Every box represents one year of your life, if you would live until 100
        years old.
      </ModalText>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="birthdate">Birthdate:</FormLabel>
        <FormInput
          type="date"
          name="birthdate"
          id="birthdate"
          key={formData.birthdate}
          value={formData.birthdate}
          onChange={handleInputChange}
          required
        />
        <ButtonWrapper>
          <ResetButton type="button" onClick={handleReset}>
            Reset
          </ResetButton>
          <SaveButton type="submit">Save</SaveButton>
        </ButtonWrapper>
      </form>
    </ModalFormContainer>
  );
}
