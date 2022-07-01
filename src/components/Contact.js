import React from 'react';

function Contact(){
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
                <form id="contact-form" action="#" className="table">
                    <input className='input_espace row' id='nome' placeholder="Name" name="name" type="text" required />
                    <input className='input_espace row' id='email' placeholder="Email" name="email" type="email" required />
                    <textarea id="text_area" className='row' cols="50" placeholder="Message" type="text" name="message" />
                    <button type="button" class="btn btn-outline-warning button_submit"> Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;