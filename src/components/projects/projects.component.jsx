import React from 'react';
import './projects.styles.scss';


import MenuItem from '../menu-item/menu-item.component';


class Projects extends React.Component{
    constructor(){
    super();

    this.state={
        section: [
            {
                title: 'E-Commerce site',
                discription:'Html5, Scss, ReactJs, Redux, firebase, stripe',
                image:'../../Image/e-commerce.png',
                id: 1
            },
            {
                title: 'Monster',
                discription:'Html5, Scss, ReactJs, RestAPI',
                image:'../../Image/Monster.jpg',
                id: 2
            },
            {
                title: 'Quote Machine',
                discription:'Html5, Css, ReactJs, RestAPI',
                image:'../../Image/RQG.jpg',
                id: 3
            },
            {
                title: 'Drum Machine',
                discription:'Html5, Css, ReactJs, RestAPI',
                image:'../../Image/Drum_Machine.png',
                id: 4
            },
            {
                title: '25+5 Clock',
                discription:'Html5, css, javaScript, ReactJs',
                image:'../../Image/pandaroma.png',
                id: 5
            },
            {
                title: 'Profile Portfolio',
                discription:'Html5, Scss, JavaScript, ReactJs',
                image:'../../Image/profile_portfolio.png',
                id: 6
            }
        ]
       }
    }

render(){
    return(
        <div className='project-menu'>
        {this.state.section.map(({title, image, id, discription}) =>(
            <MenuItem key={id} title={title} imageUrl={image} discription={discription}/>
        ))}
        
        </div>
    )
}


}
export default Projects;