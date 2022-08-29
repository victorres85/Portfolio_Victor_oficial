import React from 'react';

let d = new Date();
let currentYear = d.getFullYear();

function Footer() {
    return (
        <div className='Footer'>
            <h5>Created BY Victor Almeida | &copy; Copyright {currentYear}</h5><br></br>
            <p>All icons used in this page have been taken from <a href='https://icons8.com/l' target='_blank'>icons8</a></p>

        </div>
    )
}

export default Footer;