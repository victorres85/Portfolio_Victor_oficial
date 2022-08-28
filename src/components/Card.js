import React, { useState } from 'react';

import Pieces from '../../src/img/Pieces.svg';
import Modal from '../components/Modals/Modal'


const Card = (props) => {
    const { id, site, title, active, img, buid_with, what_I_Have_Learned, github_link, pages_link } = props.data;
    // const [content, setContent] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={`card ${active ? 'active' : 'deactivate'}`}>
            <img className='center' id='img_cover' src={img} alt='image01' onClick={() => props.onCardClick(id)}></img>
            <div className='txt'>
                <h2 onClick={() => setOpenModal(!openModal)}><img id='pieces' src={Pieces} alt='Turn'></img></h2>
            </div>
            <div className='content_frame'>
                <iframe src={site} frameborder="0" title={title}>
                </iframe>
                <div>
                    {
                        openModal && < Modal closeModal={setOpenModal} buid_with={buid_with} title={title} what_I_Have_Learned={what_I_Have_Learned} github_link={github_link} pages_link={pages_link} />
                    }
                </div>
            </div>


        </div >
    )
}
export default Card;