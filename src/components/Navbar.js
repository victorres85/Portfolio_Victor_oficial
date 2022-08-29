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
                    <div id="menu-ml"><a href="#Home">Home</a></div>
                    <div id="menu-ml"><a href="#About">About</a></div>
                    <div id="menu-ml"><a href="#Courses">Courses</a></div>
                    <div id="menu-ml"><a href="#Portfolio">Portfolio</a></div>
                    <div id="menu-ml"><a href="#Contact">Contact</a></div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;

