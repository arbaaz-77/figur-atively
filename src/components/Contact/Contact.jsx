import React from "react";
import { ContactContainer, SignUpContainer, Form } from "./ContactStyles";

import Button from "../Button/Button";

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <SignUpContainer>
        <Form>
          <input label="Name" type="text" placeholder="Name" required />

          <input label="Email" type="email" placeholder="Email" required />

          <textarea
            label="Message"
            type="textarea"
            placeholder="Message"
            required
          />

          <Button type="submit">Send Message</Button>
        </Form>
      </SignUpContainer>
    </ContactContainer>
  );
};

export default Contact;
