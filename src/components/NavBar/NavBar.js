import React from 'react';
import './NavBar.css';

const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <a href="#Me" data-text="Me">
                        Me
                        <span>🕶</span>
                    </a>
                </li>
                <li>
                    <a href="#Projects" data-text="Projects">
                        Projects
                        <span>🕶</span>
                    </a>
                </li>
                <li c>
                    <a href="#Contact" data-text="Contact">
                        Contact
                        <span>🕶</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;