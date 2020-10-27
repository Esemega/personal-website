import React from 'react';
import Project from '../Project/Project';



const ProjectsList = ({data}) => {
    return(
        <div>
        {
            data.map((project, i) =>{
                return(
                    <Project 
                        image = {data[i].image}
                        name = {data[i].name}
                        description = {data[i].description}
                        code = {data[i].code}
                        live = {data[i].live}
                    />
                )
            })
        }

    </div>
    );
}

export default ProjectsList;