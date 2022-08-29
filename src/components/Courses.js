import React from "react";
import vector1 from '../img/Vector 1.png';
import vector3 from '../img/Vector 3.png';



const Courses = (props) => {
    const { id, img, period, title, content } = props.data;

    
    return (
        <div className="card">
            <img src={img} alt={title}></img>
            <h4>{period}</h4>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Courses;