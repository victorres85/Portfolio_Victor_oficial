import React from "react";
import vector1 from '../img/Vector 1.png';
import vector3 from '../img/Vector 3.png';
import vector4 from '../img/Vector 4.png';
import vector5 from '../img/Vector 5.png';

function AboutMe() {
    return (
        <div className='AboutMe'>
            <div className="firstleft" > <img src={vector1} alt=''></img></div>
            <div className="firstright" > <img src={vector3} alt=''></img></div>
            <div className="secondleft" > <img src={vector4} alt=''></img></div>
            <div className="secondright" > <img width='1200px' src={vector5} alt=''></img></div>
            
            <div className="AM-content">
                <div className="txt-conten">
                    <h3 className="teste"> Who am I?!</h3><p> &nbsp; ____________________________________________</p>
                </div>
            <div className="content-box">
                <p>Full stack developer, have always been interested in coding and technology. From October 2022, with the aim to change career, start a self-taught journey which then lead me to take different courses in the area. In this short period of time, I have learned a great amount and have been able to create different projects which have been unit tested and deployed with the use of Docker. </p><br></br>
                    <p>As a result of my commitment to constant learning, in my previous career I have managed to win different awards and competitions and have climb my position to head of department in relative short period of time. </p><br></br>
                    <p>I am now looking for a new challenge where I will be able to keep developing my skills while bringing results to your company.</p>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;