import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, discription}) =>(
   <div className="item-card"> 
      <div  className="menu-item">
          <div className='background-image'
                    style={{
                    backgroundImage: `url(${imageUrl})`}} />
        </div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{discription}</span>
        </div>
    </div>
    
);

export default MenuItem;