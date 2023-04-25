import { useState } from "react";
import CoolButton from "../button";
import {
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
  ThankYouMessage,
} from "./ContactCardStyles";

export default function ContactCardForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleChange = (submitEvent) => {
    setFormData({
      ...formData,
      [submitEvent.target.name]: submitEvent.target.value,
    });
  };

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    try {
      await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", message: "" });
      setShowThankYouMessage(true);
      setTimeout(() => {
        setShowThankYouMessage(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong, please try again, thanks for your patience!"
      );
    }
  };

  return (
    <ContactFormContainer>
      <ContactFormTitleContainer>
        <ContactFormTitle>Drop me a message.</ContactFormTitle>
      </ContactFormTitleContainer>
      <ContactForm onSubmit={handleSubmit}>
        <FormInputsContainer>
          <InputsContainer>
            <NameContainer>
              <InputLabel htmlFor="name-input">Name:</InputLabel>
              <TextInput
                type="text"
                id="name-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={15}
                autocomplete="off"
              />
            </NameContainer>
            <EmailContainer>
              <InputLabel htmlFor="email-input">Email:</InputLabel>
              <TextInput
                type="email"
                id="email-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={50}
                autocomplete="off"
              />
            </EmailContainer>
          </InputsContainer>
          <MessageContainer>
            <InputLabel htmlFor="message-input">Message:</InputLabel>
            <MessageInput
              id="message-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={150}
              autocomplete="off"
            />
          </MessageContainer>
        </FormInputsContainer>
        <SubmitButtonContainer>
          <CoolButton type="submit" data-testid="submit-button">
            Send
          </CoolButton>
          {showThankYouMessage && <ThankYouMessage>Thanks!</ThankYouMessage>}
        </SubmitButtonContainer>
      </ContactForm>
    </ContactFormContainer>
  );
}
