import React from 'react';

import './skill.card.styles.scss'

const SkillCard = ({title}) => {
    
    return(
        <div className="skillcard">
            <div className="icon">
                    <i className="fa fa-html5"></i>
                    <span>{title}</span>
            </div>
         </div>
    );
};

export default SkillCard;