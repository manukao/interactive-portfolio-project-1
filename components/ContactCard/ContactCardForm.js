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
        <ContactFormTitle id="contact-form-title">
          Send me a message.
        </ContactFormTitle>
      </ContactFormTitleContainer>
      <ContactForm
        autoComplete="off"
        onSubmit={handleSubmit}
        aria-labelledby="contact-form-title"
      >
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
                aria-required="true"
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
                aria-required="true"
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
              aria-required="true"
            />
          </MessageContainer>
        </FormInputsContainer>
        <SubmitButtonContainer>
          <CoolButton
            buttonContent={".send"}
            type="submit"
            aria-label="Submit Contact Form"
          />
          {showThankYouMessage && (
            <ThankYouMessage role="alert" aria-live="assertive">
              Thanks!
            </ThankYouMessage>
          )}
        </SubmitButtonContainer>
      </ContactForm>
    </ContactFormContainer>
  );
}
