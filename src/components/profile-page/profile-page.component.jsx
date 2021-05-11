import React from 'react';
 
import image from '../../Image/pic.png';


import SkillCard from '../skill-card/skill.card.component';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
const skills = ["html5", "css3", "ES6", "react", "typescript", "redux"];
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
              <CSSTransition classNames="item"  key={`${s}${i}`} timeout={200}>
                  <SkillCard title={s}  />
              </CSSTransition>

             ))}
           </TransitionGroup>
          
             <div > 
             <button className="button" onClick={() => this.handleClick()}>Skills</button>
            </div>
     </div>
    
   
  
    );
};
}

export default ProfilePage;

