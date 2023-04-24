import styled from "styled-components";

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContactFormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
`;

const ContactFormTitle = styled.div`
  font-weight: 600;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInputsContainer = styled.div`
  display: flex;
  font-size: x-small;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`;

const NameContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
`;

const EmailContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
`;

const MessageContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: 8px;
`;

const InputLabel = styled.label``;

const TextInput = styled.input`
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

const MessageInput = styled.textarea`
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

export {
  ContactFormContainer,
  ContactFormTitleContainer,
  ContactFormTitle,
  ContactForm,
  FormInputsContainer,
  InputsContainer,
  NameContainer,
  EmailContainer,
  MessageContainer,
  SubmitButtonContainer,
  InputLabel,
  TextInput,
  MessageInput,
};
