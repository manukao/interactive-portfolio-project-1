import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  user-select: none;
  padding-top: 12px;
`;

export const ContactFormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
`;

export const ContactFormTitle = styled.div`
  font-weight: bold;
  color: var(--color-secondary);
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 8px;

  @media (min-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 1024px) {
    gap: 14px;
  }
`;

export const FormInputsContainer = styled.div`
  display: flex;
  font-size: x-small;

  @media (min-width: 768px) {
    font-size: small;
  }

  @media (min-width: 1024px) {
    font-size: medium;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;

  @media (min-width: 768px) {
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 14px;
  }
`;

export const NameContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
`;

export const EmailContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
`;

export const MessageContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
`;

export const SubmitButtonContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 16px;
`;

export const ThankYouMessage = styled.div`
  color: var(--color-secondary);
  position: absolute;
  font-size: x-small;
  right: 5rem;

  @media (min-width: 768px) {
    font-size: small;
  }

  @media (min-width: 1024px) {
    font-size: medium;
  }
`;

export const InputLabel = styled.label``;

export const TextInput = styled.input`
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
  border: none;
  color: var(--color-primary);
  width: 100%;
  height: 100%;

  &:focus {
    outline: solid 1px var(--color-secondary);
  }

  &::selection {
    background-color: var(--color-primary);
    color: var(--bg-secondary-color);
  }
`;

export const MessageInput = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  color: var(--color-primary);
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
  border: none;
  padding: 8px;
  font-family: system-ui;

  &:focus {
    outline: solid 1px var(--color-secondary);
  }

  &::selection {
    background-color: var(--color-primary);
    color: var(--bg-secondary-color);
  }

  &::-webkit-scrollbar {
    width: 0.25rem;
    background-color: var(--bg-secondary-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
  }
`;
