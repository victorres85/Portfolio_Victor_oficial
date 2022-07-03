import Github from '../../../src/img/Solid_github.svg';
import Web from '../../../src/img/new_web.svg';

function Modal({ closeModal, buid_with, what_I_Have_Learned, title, github_link, pages_link }) {


    return (
        <div>
            <div id="modal-container" onClick={() => closeModal(false)}>
                <div className='content_frame'>
                    <div className='ReadMe'>
                        <div className='ReadMeTxt'>
                            <h2>{title}</h2>
                            <h3>Build with:</h3>
                            <h5>{buid_with}</h5>
                            <h3>What I have learned:</h3>
                            <p>{what_I_Have_Learned}</p>
                        </div>
                        <div className='ReadMeImg'>
                            <a href={github_link} target="_blank" rel="noreferrer" ><img id='solid_github' src={Github} alt={github_link}></img></a>
                            <a href={pages_link} target="_blank" rel="noreferrer" ><img id='web' src={Web} alt={pages_link}></img></a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal;