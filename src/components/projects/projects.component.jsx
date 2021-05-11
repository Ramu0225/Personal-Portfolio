import React from 'react';
import './projects.styles.scss';


import MenuItem from '../menu-item/menu-item.component';


class Projects extends React.Component{
    constructor(){
    super();

    this.state={
        section: [
            {
                title: 'Monster',
                discription:'fsdfsdf',
                imageUrl:'../../Image/Monster.jpg',
                id: 1
            },
            {
                title: 'Quote Machine',
                discription:'fsdfsdf',
                imageUrl:'../../Image/RQG.jpg',
                id: 2
            },
            {
                title: 'My Fan Page',
                discription:'fsdfsdf',
                imageUrl:'../../Image/Myfanpage.jpg',
                id: 3
            }]
       }
    }

render(){
    return(
        <div className='project-menu'>
        {this.state.section.map(({title, imageUrl, id, discription}) =>(
            <MenuItem key={id} title={title} imageUrl={imageUrl} discription={discription}/>
        ))}
        
        </div>
    )
}


}
export default Projects;