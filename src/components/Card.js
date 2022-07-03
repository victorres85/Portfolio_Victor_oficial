import React, { useState } from 'react';
import Github from '../../src/img/Solid_github.svg';
import Web from '../../src/img/new_web.svg';
import Turn from '../../src/img/turn.svg';


const Card = (props) => {
    const { id, site, title, active, img, buid_with, what_I_Have_Learned, github_link, pages_link } = props.data;
    const [content, setContent] = useState(false);
     const [openModal, setOpenModal] = useState(false);

    return (
        <div className={`card ${active && 'active'}`}>
            <img className='center' id='img_cover' src={img} alt='image01' onClick={() => props.onCardClick(id)}></img>
            <div className='txt'>
                <h2 onClick={() => setContent(!content)}><img id='turn' src={Turn} alt='Turn'></img></h2>
            </div>
            <div className={`${content ? 'content_site' : 'content_frame'}`}>
                <iframe src={site} frameborder="0" title={title}>
                </iframe>
            </div>
            <div className={`${content ? 'content_frame' : 'content_site'}`}>
                <div className='ReadMe'>
                    <div className='ReadMeTxt'>
                        <h2>{title}</h2>
                        <h3>Build with:</h3>
                        <h5>{buid_with}</h5>
                        <h3>What I have learned:</h3>
                        <p>{what_I_Have_Learned}</p>
                    </div>
                    <div className='ReadMeImg'>
                        <a href={github_link} target="_blank"><img id='solid_github' src={Github} alt={github_link}></img></a>
                        <a href={pages_link} target="_blank"><img id='web' src={Web} alt={pages_link}></img></a>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Card;