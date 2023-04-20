import { useState } from "react";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  padding: 4px 4px;
  height: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TextInput = styled.input`
  width: 150px;
  margin: 4px;
  background-color: var(--bg-secondary-color);
`;

const MessageInput = styled.textarea`
  resize: none;
  width: 300px;
  height: 60px;
  margin: 4px;
  background-color: var(--bg-secondary-color);
`;

export default function ContactCardForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      alert("Thank you for your message! I'll get back to you asap.");
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong, please try again, thanks for your patience!"
      );
    }
  };

  return (
    <ContactFormContainer>
      <ContactForm onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          maxLength={15}
          data-testid="name-input"
        />
        <TextInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          maxLength={50}
          data-testid="email-input"
        />
        <MessageInput
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          maxLength={150}
          data-testid="message-input"
        />
        <button type="submit" data-testid="submit-button">
          Send Message
        </button>
      </ContactForm>
    </ContactFormContainer>
  );
}
