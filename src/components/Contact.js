import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_60giujk', 'template_c8pjk5s', form.current, 'yc_1ic9z-Gr9QiLXC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
    };
  
    return (
        <section id="contact">
            <div className="container">
                <div className="heading">
                    <p className="title text-left">
                        Do you like what you see?
                        <br></br>
                        Let's take a coffee, then...
                    </p>
                </div>
                <form id="contact-form" ref={form} onSubmit={sendEmail} className="table">
                    <input className='input_espace row' id='nome' placeholder="Name" name="name" type="text" required />
                    <input className='input_espace row' id='email' placeholder="Email" name="user_email" type="email" required />
                    <textarea id="text_area" className='row' cols="50" placeholder="Message" type="text" name="message" />
                    <input type='submit' class="btn btn-outline-warning button_submit" value="Send" />
                </form>
            </div>
        </section>
    )
}

export default Contact;