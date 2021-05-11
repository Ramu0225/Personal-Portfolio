import React from 'react';
import CustomButton from '../custom-buton/custom-button.component'; 
import image from '../../Image/pic.png';

import './profile-page.styles.scss';
import SkillCard from '../skill-card/skill.card.component';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
const skills = [{title:"html5", icon:"fa fa-html5"},{ title: "css3", icon:"fa fa-css3"}, {title:"ES6", icon:"fa  fa-git"}, {title:"react", icon:""}, {title:"typescript", icon:""}, {title:"redux", icon: ""}];
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
        
          <div className="img-name">
            <img src={image} alt="skill" className="img" /> 
            <h1>Helloooo!</h1>
          </div>
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

