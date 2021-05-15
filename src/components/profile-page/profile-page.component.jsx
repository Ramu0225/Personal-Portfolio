import React from 'react';
import CustomButton from '../custom-buton/custom-button.component'; 
import image from '../../Image/pic.png';
import Github from '../../JS_Icons/github.png';
import Html from '../../JS_Icons/html-5.png';
import CSS from '../../JS_Icons/CSS3.png';
import Javascript from '../../JS_Icons/javascript.png';
import Reactjs from '../../JS_Icons/React.js.png';
import Npm from '../../JS_Icons/NPM.png';
import TS from '../../JS_Icons/programming.png';
import Nodejs from '../../JS_Icons/node-js.png';
import VScode from '../../JS_Icons/vs_code.png';
import Sass from '../../JS_Icons/sass.png';

import './profile-page.styles.scss';
import SkillCard from '../skill-card/skill.card.component';
import DisplayText from '../display-text/display-text.component';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const skills = [{title:"html5", icon: Html},{ title: "css3", icon:CSS}, {title:"JavaScript", icon: Javascript}, {title:"React", icon: Reactjs}, {title:"Typescript", icon:TS}, {title:"Redux", icon: TS}, {title:"Github", icon: Github},{title:"NPM", icon: Npm},{title:"NodeJS", icon: Nodejs},{title:"Sass", icon: Sass},{title:"Bootstrap", icon: TS},{title:"VS Code", icon: VScode}];
let index = 3;
class ProfilePage extends React.Component{
  constructor(){
    super();
    this.state ={
      list: []
    };
  }
  componentDidMount(){
    this.updateList(0, index);
  }
  updateList = (startIndex, endIndex) => {
    this.setState({
      list: [...skills.slice(startIndex, endIndex)]
    })
  }
  handleClick = () => {
    if(index >= skills.length){
      index = 3;
      this.updateList(0, index);
    }else{
      const startIndex = index;
      index = index + 3;
      this.updateList(startIndex, index);
    }
  }

  render(){
  return (
    <div className="profilepage">
        <img src={image} alt="skill" className="img" /> 
        <div className="media">
            <a href="https://github.com/Ramu0225" target='_blank' rel="noreferrer"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ramu-akarapu-50406121/" target='_blank' rel="noreferrer"><i className="fa fa-linkedin" /></a>
            <a href="https://codepen.io/Ramu5199"  target='_blank' rel="noreferrer"><i className="fa fa-codepen"></i></a>
            <a href="https://www.freecodecamp.org/ramu0225" target='_blank' rel="noreferrer"><i className="fa fa-free-code-camp"></i></a>
        </div>
        <DisplayText />
        <TransitionGroup className="skillcard-container">
             {this.state.list.map((s,i) => (
          <CSSTransition classNames="item" key={`${s.title}-${i}`} timeout={200}>
              <SkillCard title={s.title} icon={s.icon}/>
          </CSSTransition>
          ))}
        </TransitionGroup>
        <div > 
          <CustomButton onClickHandler={this.handleClick}>Skills</CustomButton>
        </div>
     </div>
    
   
  
    );
};
}

export default ProfilePage;

