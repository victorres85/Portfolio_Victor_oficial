import React from 'react';

let d = new Date();
let currentYear = d.getFullYear();

function Footer() {
    return (
        <div className='Footer'>
            <h5>Created BY Victor Almeida | &copy; Copyright {currentYear}</h5>
        </div>
    )
}

export default Footer;