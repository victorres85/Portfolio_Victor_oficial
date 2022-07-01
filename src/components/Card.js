import React, { useState } from 'react';

const Card = (props) => {
    const { id, title, active, site, img } = props.data;
    const [content, setContent] = useState(false);

    return (
        <div className={`card ${active && 'active'}`}>
            <img className='center' id='img_cover' src={img} alt='image01' onClick={() => props.onCardClick(id)}></img>
            <div className='txt'>
                <h2 onClick={() => setContent(!content)}>{title}</h2>
            </div>
            <div className={`${content ? 'content_site' : 'content_frame'}`}>
                <iframe src={site} frameborder="0" title={title}>
                </iframe>
            </div>
            <div className={`${content ? 'content_frame' : 'content_site'}`}>
                <form id="contact-form" action="#" className="table">
                    <input className='input_espace row' id='nome' placeholder="Name" name="name" type="text" required />
                    <input className='input_espace row' id='email' placeholder="Email" name="email" type="email" required />
                    <textarea id="text_area" className='row' cols="50" placeholder="Message" type="text" name="message" />
                    <button type="button" class="btn btn-outline-warning button_submit"> Enviar</button>
                </form>
            </div>
        </div >
    )
}
export default Card;