import React from 'react';

function Navbar() {
    return (
        <div className="nav-wrapper">
            <div class="nav-bar">
                <input type="checkbox" id="navcheck" className="navcheck" role="button" title="menu">
                </input>
                <label for="navcheck" aria-hidden="true" className="menu-icon" title="menu">
                    <span class="burger">
                    </span>
                </label>
                <div className="menu">
                    <div id="menu-ml1"><a href="#Home">Home</a></div>
                    <div id="menu-ml2"><a href="#About">About</a></div>
                    <div id="menu-ml3"><a href="#Courses">Courses</a></div>
                    <div id="menu-ml4"><a href="#Portfolio">Portfolio</a></div>
                    <div id="menu-ml5"><a href="#Contact">Contact</a></div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;

