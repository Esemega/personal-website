import React from 'react';

import './Contact.css'


const Contact = () =>{
    return(
        <div className="contact-section">
            <h1 className="title">
                Let's talk!
            </h1>
            <p>
                Contact me via  
                <a href="mailto:sogaral89@gmail.com?Desde%20la%20web"> Email.</a>
            </p>
            <p>Or found me in my profiles.</p>
            <ul class="social-list">
                <li class="social-list__item">
                <a class="social-list__link" href="https://www.linkedin.com/in/sogaral/">
                    <i class="fab fa-linkedin"></i>
                </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/Esemega">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io/esemega/">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;