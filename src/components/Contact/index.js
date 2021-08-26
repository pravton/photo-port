import React from 'react';

function ContactFrom() {
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea cols="30" rows="5" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactFrom;

