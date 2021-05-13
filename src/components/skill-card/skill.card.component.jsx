import React from 'react';

import './skill.card.styles.scss'

const SkillCard = ({title, icon}) => {
    
    return(
        <div className="skillcard">
            <div className="icon">
                <i className={icon}></i>
            </div>
            <div>            
                <span>{title}</span>
            </div>
         </div>
    );
};

export default SkillCard;