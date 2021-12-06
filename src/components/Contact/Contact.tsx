import React from 'react';
import './Contact.css';

const Contact = () => (
    <section className="section contact center" id="contact">
        <h2 className="section__title">Contact</h2>
        <a href="mailto:joaovitorcasarin@hotmail.com">
            <button type="button" className="btn btn--outline">
                Email me
            </button>
        </a>
    </section>
);

export default Contact;
