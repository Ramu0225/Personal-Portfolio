import React from 'react';
import CustomButton from '../custom-buton/custom-button.component';

import './contact.styles.scss';

const Contact = () => (
    <div className="sign-in">
        <form className="input">
            <h2>Send me a message</h2>
            <span>Name:</span>
            <input  type="text" value="Name" required />
            <br/>
            <input name="email" type="email" value="Email" required />
            <br/>
            <textarea  type="text" value="Message" size="100" />

        </form>
        <div>
            <CustomButton type="submit" > Send  </CustomButton>
        </div>
    </div>
);

export default Contact;