import React from 'react';

import './skill.card.styles.scss'

const SkillCard = ({title, icon}) => {
    
    return(
        <div className="skillcard">
            <div className="icon">
                <i className={icon}></i>
            </div>
            <span>{title}</span>
         </div>
    );
};

export default SkillCard;