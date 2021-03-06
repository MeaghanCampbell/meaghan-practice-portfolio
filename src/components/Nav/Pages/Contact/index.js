import React, { useState } from 'react'
import { validateEmail } from '../../../../utils/helpers'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.value.length === 0) {
            setErrorMessage('This field is required.')
        }
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
    <section  id="contact" className="contact">
        <h2>CONTACT</h2>
        <form id="contact-form" className="contactForm" onSubmit={handleSubmit}>
            <div className="name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className="email">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="message">
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
      </section>
    )
}

export default Contact;