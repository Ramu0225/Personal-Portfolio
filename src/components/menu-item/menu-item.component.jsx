import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, discription, URL}) =>(
   <div className="item-card"> 
      <div  className="menu-item">
          <div className='background-image'
                    style={{
                    backgroundImage: `url(${imageUrl})`}} />
        </div>
        <div className='content'>
           <a href='{URL}' target = "_blank" className="title">{title} </a> 
           
            <span className="subtitle">{discription}</span>
        </div>
    </div>
    
);

export default MenuItem;