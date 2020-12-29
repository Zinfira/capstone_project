import React from 'react';
import * as emailjs from 'emailjs-com';
import '../../App.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wcwp3ay', 'template_2qa094w', e.target, 'user_s1MM5KHV7EmSjNz4D894z')
      .then((result) => {
          alert(result.text + " Your mail is sent");
      }, (error) => {
          alert(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label> Name: </label>
      <input type="text" name="user_name" />
      <br />
      <label>Email: </label>
      <input type="email" name="user_email" />
      <br />
      <label>Message: </label>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
}