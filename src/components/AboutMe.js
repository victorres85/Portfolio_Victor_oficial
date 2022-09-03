import React from "react";
import vector1 from '../img/Vector 1.png';
import vector3 from '../img/Vector 3.png';
import vector4 from '../img/Vector 4.png';
import vector5 from '../img/Vector 5.png';

function AboutMe() {
    return (
        <div className='AboutMe' id='About'>
            <div className="firstleft" > <img src={vector1} alt=''></img></div>
            <div className="firstright" > <img src={vector3} alt=''></img></div>
            <div className="secondleft" > <img src={vector4} alt=''></img></div>
            <div className="secondright" > <img width='600px' src={vector5} alt=''></img></div>
            <div className="thirdleft" > <img width='200px' src={vector1} alt=''></img></div>
            <div className="fourthleft" > <img width='200px' src={vector3} alt=''></img></div>
            <div className="thirdright" > <img width='200px' src={vector4} alt=''></img></div>
            <div className="fourthright" > <img width='400px' height='600px' src={vector5} alt=''></img></div>
            <div className="thithleft" > <img width='200px' src={vector3} alt=''></img></div>

            <div className="AM-content">
                <div className="txt-conten">
                    <h3 className="teste"> Who am I?!</h3><p> &nbsp; ____________________________________________</p>
                </div>
            <div className="content-box">
            <p>Full stack developer who has always been interested in coding and technology. As of  2021 started a self-taught journey which lead me to take different courses in the area, with the aim to change career. In this period of time, I have learned a great amount and have been able to work on different projects.</p> <br></br> 
<p>I am committed to my tasks and to constant learning, what in result lead me to win different awards and competitions and helped to climb my position to head of department in short period of time. </p> <br></br>
<p>Now I am looking for a new challenge where I will be able to keep developing my skills while bringing results to your company.</p>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;