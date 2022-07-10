import React from 'react';
import { useState } from 'react';
import picture from '../img/eu.png'
import block from '../img/block_for_cv_2.svg'




function CV() {
    const [profileControl, setProfileControl] = useState(false)
    const [educationControl, setEducationControl] = useState(false)
    const [itSkillsControl, setItSkillsControl] = useState(false)
    // const [interestsControl, setInterestsControl] = useState(true)


    const profile_control = () => {
        setProfileControl(!profileControl)
        setEducationControl(false)
        setItSkillsControl(false)
    }
    const education_control = () => {
        setProfileControl(false)
        setEducationControl(!educationControl)
        setItSkillsControl(false)
    }
    const itSkills_control = () => {
        setProfileControl(false)
        setEducationControl(false)
        setItSkillsControl(!itSkillsControl)
    }

    return (
        <div className='CV'>
            <img className="picture" src={picture} alt="Victor"></img>
            <div className='content_CV'>
                <div onClick={profile_control} >
                    <div className='cd_block block_margin'><strong>Profile</strong>
                        <img src={block} alt="image_"></img>
                    </div>
                    <div className={`cd_block ${profileControl ? 'Profile_content' : 'Profile'}`}>
                        <p>Full stack developer, have always been interested in coding and technology. Started programming in Delphi, moved into Visual Basic and have created a few solutions using excel and VBA. From October 2021 decided to change career and started a self-taught programming journey first with Java which gave me a good ground on OOP and later in January moved into Python. I have than done different courses to help me gain further skills.
                        </p>
                        <p>I am now looking to work as a Developer to gain further knowledge and experience.
                        </p>
                    </div>
                </div>

                <div onClick={education_control} >
                    <div className='cd_block block_margin'><strong> Education</strong>
                        <img src={block} alt="image_"></img></div>
                    <div className={`cd_block ${educationControl ? 'Education_content' : 'Education'}`}>
                        <div className='cd_block1 '>
                            <table>
                                <tr>
                                    <td>06/22-Present</td>
                                    <td>Just IT Training Ltd, London
                                        Digital Skills Bootcamp: Software Development
                                        A twelve week intensive bootcamp covering the fundamentals of Web and Software development.</td>
                                </tr>
                                <br></br>
                                <tr>
                                    <td>01/22 – 05/22</td>
                                    <td>EBAC (British School of Arts, Science & Technology) , Brazil
                                        Full stack developer python
                                        Online intensive course covering microservices, CI/CD, Docker, Python, Django-Rest-Framework, Postgres, Linux, Html, CSS, JavaScript and React.</td>
                                </tr>

                                <br></br>
                                <tr>
                                    <td>01/08 – 12/12</td>
                                    <td>University: SENAC, Brazil  <br></br>  Hotel Management </td>
                                </tr>


                            </table>

                        </div>
                    </div>
                </div>
                <div onClick={itSkills_control} >
                    <div className='cd_block block_margin'><strong>IT Skills</strong>
                        <img src={block} alt="image_"></img></div>
                    <div className={`cd_block ${itSkillsControl ? 'ITSkills_content' : 'ITSkills'}`}>
                        <strong> Software Development Skills:</strong> Microservices, CI/CD, Docker, Django, Django-Rest-Framework, Postgres.
                        <br></br> <strong> Web Technology:</strong> HTML5, CSS3, JavaScript, React
                        <br></br> <strong> Core Programming Languages:</strong> Python, Java, JavaScript
                        <br></br> <strong>  Projects:</strong>
                        <ul>
                            <li>Ecommerce API, which have been wrote in Python/Django-Rest-Framework and published on Heroku through a CI/CD approach using Github for version control and automated tests, and Docker to create the project image to be deployed</li>
                            <li>Portfolio website created using React, JavaScript, HTML, CSS, on this project I have worked on different skills related to the front-end.</li>
                        </ul>

                    </div>
                </div>
            </div>


        </div >
    )
}

export default CV;



