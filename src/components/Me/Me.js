import React from 'react';
import robot from './robot.svg';

import './Me.css'; 

const Me = () =>{
    return(
        <div className="me-section">
            <img src={robot} className="robot" alt="robot" />
            <div  className="text">
                <h1 className="title">
                    Hi there!
                </h1>
                <p>
                    My name is <strong>Sonia</strong>. I'm a Frontend developer based in Spain.
                </p>
                <p>
                    Welcome to my website. Feel free to take a look.
                </p>
            </div>
        </div>
    );
}

export default Me;