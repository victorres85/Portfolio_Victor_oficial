import Logo from '../../img/VA_1.svg';
import Html5 from '../../img/tecnologies/Html5.svg';
import Css from '../../img/tecnologies/Css.svg';
import React_svg from '../../img/tecnologies/React.svg';
import javascript from '../../img/tecnologies/javascript.svg';
import python from '../../img/tecnologies/Python.svg';
import Java from '../../img/tecnologies/Java.svg';
import Django from '../../img/tecnologies/Django.svg';
import Mongodb from '../../img/tecnologies/Mongodb.svg';
import Postgresql from '../../img/tecnologies/Postgresql.svg';
import Git from '../../img/tecnologies/Git.svg';
import Github from '../../img/tecnologies/Github.svg';
import Docker from '../../img/tecnologies/Docker.svg';
import Nodejs_svg from '../../img/tecnologies/Nodejs.svg';
import Sass_svg from '../../img/tecnologies/Sass.svg';
import LettersAnimation from './LettersAnimation';
import hello from '../../img/Hello.png';
import { useEffect, useState } from 'react';
import resume from  '../../Resume/VictorFS.pdf'

function Cover() {
    const [letterClass, setLetterClass] = useState('text-animate')
   
    const hiArray = ['I', "'", 'm', '', 'V', 'i', 'c', 't', 'o', 'r']
      

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => clearTimeout(timeout)
    }, []);

    return (
        <div className='Cover' >
            <div className='cover-container' >

                <div className='cover-txt'>
                    <img src={hello} alt='Hello' width='100px'></img>
                    <div className='text'>
                        <h1><LettersAnimation letterClass={letterClass} letters={hiArray} idx={1} /><br></br></h1>


                    </div>
                    <div>
                        <h4 className='txt'>Full Stack Web Developer</h4>
                        <h4 className='txt'>Passionated about learning and bringing results!!!</h4>
                        <span className='cover-buttons'>
                            <div className='DownloadCV'><a href={resume} download><h4>Download CV</h4></a></div>
                            <div className='GetInTouch'><a href="#Contact"><h4>Get In Touch!</h4></a></div>

                        </span>
                        <h4 className='txt'> Tecnologies I have learned along the way:</h4>
                        <div className='tecnologies'>
                            <ul>
                                <li><img src={Html5} alt="Html5"></img></li>
                                <li><img src={Css} alt="Css"></img></li>
                                <li><img src={Sass_svg} alt="Sass"></img></li>
                                <li><img src={React_svg} alt="React"></img></li>
                                <li><img src={Nodejs_svg} alt="NodeJs"></img></li>
                                <li><img src={javascript} alt="javascript"></img></li>
                                <li><img src={python} alt="python"></img></li>
                                <li><img src={Java} alt="Java"></img></li>
                                <li><img src={Django} alt="Django"></img></li>
                                <li><img src={Mongodb} alt="Mongodb"></img></li>
                                <li><img src={Postgresql} alt="Postgresql"></img></li>
                                <li><img src={Git} alt="Git"></img></li>
                                <li><img src={Github} alt="Github"></img></li>
                                <li><img src={Docker} alt="Docker"></img></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='selfie' >
                    

                </div>

            </div>
        </div>
    )
}

export default Cover;