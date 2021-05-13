import React from 'react';

import './display-text.styles.scss';
const text= ["I am a frontend developer","I want to be a full-stack developer"];

class DisplayText extends React.Component{
    constructor(){
      super();
      this.state ={
          index: 0
      };
    }

    displayText = () =>{
        if (this.state.index >= text.length){
            this.setState({
                index : 0
            });
        }else{
            this.setState({
                index : this.state.index +1
            })
        }
    }
    
    componentDidMount(){
        setInterval(this.displayText, 3000);
    }
  

    render(){
        return(
            <div className="display-text"> 
                {text[this.state.index] || "Hi..! I am Ramu"}
            </div>
        
        );
    }
};

export default DisplayText;