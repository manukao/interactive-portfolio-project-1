import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  background-color: white;
  border: 1px solid gray;
  padding: 1rem;
  margin: 4px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TextInput = styled.input`
  width: 150px;
  margin: 4px;
`;

const MessageInput = styled.textarea`
  resize: none;
  width: 300px;
  height: 60px;
  margin: 4px;
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
      await axios.post("/api/contactForm", formData);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
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