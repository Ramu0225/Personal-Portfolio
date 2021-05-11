import React from 'react';

import './custom-button.styles.scss';

const CustomButton =({children, onClickHandler}) => (
    <button className="custom-button" onClick={() => onClickHandler()}>
        {children}
    </button>
);

export default CustomButton;