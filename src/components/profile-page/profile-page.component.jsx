import React from 'react';
import CustomButton from '../custom-buton/custom-button.component'; 
import image from '../../Image/pic.png';

import './profile-page.styles.scss';
import SkillCard from '../skill-card/skill.card.component';
import DisplayText from '../display-text/display-text.component';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const skills = [{title:"html5", icon:"fa fa-html5"},{ title: "css3", icon:"fa fa-css3"}, {title:"JavaScript", icon:"fab fa-js"}, {title:"React", icon:"fa fa-git"}, {title:"Typescript", icon:"fa fa-git"}, {title:"Redux", icon: "fa fa-github"}, {title:"Github", icon: "fa fa-github"},{title:"NPM", icon: "fa fa-git"},{title:"NodeJS", icon: "fa fa-git"},{title:"Wordpress", icon: "fa fa-git"},{title:"Bootstrap", icon: "fa fa-git"},{title:"VS Code", icon: "fa fa-git"}];
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
            <a href="https://github.com/Ramu0225" target='_blank' className="fa fa-github"/>
            <a href="https://www.linkedin.com/in/ramu-akarapu-50406121/" target='_blank' className="fa fa-linkedin"/>
            <a href="https://codepen.io/Ramu5199"  target='_blank' className="fa fa-codepen"/>
            <a href="https://www.freecodecamp.org/ramu0225" target='_blank' className="fa fa-free-code-camp"/>
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

