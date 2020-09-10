import React from 'react';
import './Project.css';

const Project = ({image, name, description, code, live}) => {
    return(
        <div className='card'>
            <img alt='Project img' src={image} />
            <div className='container'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>
                    <a target="_blank" rel="noopener noreferrer" 
                        href={code}> Code
                    </a>
                    <a target="_blank" rel="noopener noreferrer"
                    href={live}>Live
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Project;