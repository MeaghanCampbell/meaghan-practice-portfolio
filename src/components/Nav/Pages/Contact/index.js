import React from 'react'

function Contact() {
    return (
    <section  id="contact" className="contact">
        <h2>CONTACT</h2>
        <form id="contact-form" className="contactForm">
            <div className="name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
            </div>
            <div className="email">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" />
            </div>
            <div className="message">
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5"  />
            </div>
            <button type="submit">Submit</button>
        </form>
      </section>
    )
}

export default Contact;