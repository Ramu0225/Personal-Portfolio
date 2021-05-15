import React from 'react';
import './projects.styles.scss';
import {ProjectsData} from '../../components/projects-data/projects';


import MenuItem from '../menu-item/menu-item.component';


class Projects extends React.Component{
    constructor(){
    super();

    this.state={
        section: ProjectsData
       }
    }

render(){
    return(
        <div className='project-menu'>
        {this.state.section.map(({title, image, URL, id, discription}) =>(
            <MenuItem key={id} title={title} imageUrl={image} URL={URL} discription={discription}/>
        ))}
        </div>
    )
}


}
export default Projects;