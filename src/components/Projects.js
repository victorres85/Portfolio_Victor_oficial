import React from "react";
import Technologies from "./Technologies";
import Github from '../img/tecnologies/Github.png';
import Webpages from '../img/web.svg';



const Projects = (props) => {
    
    const { id, site, title, buid_with, what_I_Have_Learned, github_link,} = props.data;

    
   

    if (id % 2 === 0){
        return(
            <>
            <h5>_______________________________________________________________________</h5>
            <h2>{title}</h2>
            <div className="project">
                <div className="project-description">
                    <div className="site">
                        <iframe className='siteEven'src={site} frameborder="0" title={title}></iframe>
                        <div className="links">
                            <a href={site} target='_blank'><img img className='icon' src={Webpages} alt='Site'></img></a>
                            <a href={github_link} target='_blank'><img img className='icon' src={Github} alt='GitHub'></img></a>
                        </div>
                    </div>
                </div>
                <div className="tech_stack">
                    <h3> Builded with:</h3><br></br>
                    <div className="img_stack">
                    {
                        buid_with.map((card) =>
                            <Technologies
                                key={card.id}
                                data={card}
                            />
                        )
                    }
                    </div>
                    <h3>What have I learned?</h3><br></br>
                    <p>{what_I_Have_Learned}</p>
                        
                </div>
            </div>
        </>
        )
    }
    return (
        <>
                    <h5>_______________________________________________________________________</h5>

        <h2>{title}</h2>
        <div className="project">
        <div className="tech_stack">
                    <h3> Builded with:</h3><br></br>
                    <div className="img_stack">
                    {
                        buid_with.map((card) =>
                            <Technologies
                                key={card.id}
                                data={card}
                            />
                        )
                    }
                    </div>
                    <h3>What have I learned?</h3><br></br>
                    <p>{what_I_Have_Learned}</p>
                        
                </div>
            <div className="project-description">
                <div className="site">
                    <iframe className='siteOdd'src={site} frameborder="0" title={title}></iframe>
                    <div className="links">
                        <a href={site} target='_blank'><img img className='icon' src={Webpages} alt='Site'></img></a>
                        <a href={github_link} target='_blank'><img img className='icon' src={Github} alt='GitHub'></img></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;
