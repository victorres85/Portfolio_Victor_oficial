import React from "react";



const Technologies = (props) => {
    const { tech_img, tech_alt } = props.data;
return(
<>
<img className='img_tech' src={tech_img} alt={tech_alt}></img>
</>
)
}
export default Technologies;