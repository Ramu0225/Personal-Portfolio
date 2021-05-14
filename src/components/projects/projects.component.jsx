import React from 'react';
import './projects.styles.scss';


import MenuItem from '../menu-item/menu-item.component';


class Projects extends React.Component{
    constructor(){
    super();

    this.state={
        section: [
            {
                title: 'E-commerce site',
                discription:'Html5, Scss, ReactJs, Redux, firebase, stripe',
                image:'../../Image/e-commerce.png',
                URL:'',
                id: 1
            },
            {
                title: 'Monster Search',
                discription:'Html5, Scss, ReactJs, RestAPI',
                image:'../../Image/Monster.jpg',
                URL:"http://ramu0225.github.io/Monsters-Rolodex/",
                id: 2
            },
            {
                title: 'Quote Generator',
                discription:'Html5, Css, ReactJs, RestAPI',
                image:'../../Image/RQG.jpg',
                URL:'https://ramu0225.github.io/Random-Quote-Generator/',
                id: 3
            },
            {
                title: 'Drum Machine',
                discription:'Html5, Css, ReactJs, RestAPI',
                image:'../../Image/Drum_Machine.png',
                URL:'https://codepen.io/Ramu5199/pen/KKgJPyg',
                id: 4

            },
            {
                title: '25+5 Clock',
                discription:'Html5, css, javaScript, ReactJs',
                image:'../../Image/pandaroma.png',
                URL:'http://codepen.io/Ramu5199/pen/jOVNVvx',
                id: 5
            },
            {
                title: 'Profile Portfolio',
                discription:'Html5, Scss, JavaScript, ReactJs',
                image:'../../Image/profile_portfolio.png',
                URL:'',
                id: 6
            }
        ]
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