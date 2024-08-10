import React from 'react';
import './Style.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <p>We'd love to hear from you! Please fill out the form below.</p>
      <form>
        
        <div className="form-group">
         <h2> <label htmlFor="name">Name:    </label></h2>
          <input type="text" id="name" name="name" /><br/><br/>
        </div>
        <div className="form-group">
          <h2><label htmlFor="email">Email:   </label></h2>
          <input type="email" id="email" name="email" /><br/><br />
        </div>
        <div className="form-group">
          <h2><label htmlFor="message">Message:  </label></h2>
          <textarea id="message" name="message" /><br/><br /><br/><br />
        </div>
        <button type="submit">Send Message</button><br/><br />
      </form>
      <div className="contact-info"><br/><br /><br/><br />
        <h2>Our Contact Info</h2>
        <p>Phone: 555-000-5555</p>
        <p>Email: gearup2000@gmail.com</p>
        <p>Address: 123 Main St, california, USA</p>
      </div>
    </div>
  );
};

export default Contact;
