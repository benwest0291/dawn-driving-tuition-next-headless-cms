import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81ss9ok', 'template_bgxfchw', form.current, 'iZnUotY3oBnh-h8Xu')
      .then((result) => {
        console.log(result.text);
        setStatusMessage("Email sent success 😁");
      }, (error) => {
        console.log(error.text);
        setStatusMessage(`${error.text} happened 😱`);
      });
    e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form mt-5 mb-5">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input ctype="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <p>I aim to respond within 24 hours.</p>
      <input className="contact__btn" type="submit" value="Send" />
      <p className="mt-3">{statusMessage}</p>
    </form>
  );
};

export default ContactForm
