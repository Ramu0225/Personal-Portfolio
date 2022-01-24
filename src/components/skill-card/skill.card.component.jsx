import React from 'react';

import './skill.card.styles.scss'

const SkillCard = ({title, icon}) => {
    
    return(
        <div className="skillcard">
            <div className="icon">
                <img src={icon} alt="html" width="30px" height="30px"></img>
            </div>
            <div>            
                <span>{title}</span>
            </div>
            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
         </div>
    );
};

export default SkillCard;