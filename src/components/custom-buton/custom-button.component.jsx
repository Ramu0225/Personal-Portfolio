import React from 'react';

import './custom-button.styles.scss';

const CustomButton =({children, type, onClickHandler, customClass}) => (
    <button type={type || ""} className={`custom-button ${customClass||""}`} onClick={() => onClickHandler()}>
        {children}
    </button>
);

export default CustomButton;