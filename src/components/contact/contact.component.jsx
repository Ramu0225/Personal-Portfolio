import React from 'react';
import CustomButton from '../custom-buton/custom-button.component';

import './contact.styles.scss';

export class Contact extends React.Component{
    constructor(){
        super();
        this.state={
            name: "",
            email:"",
            message:""
        }
    }
    onNameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onEmailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onMessageChangeHandler = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    onClickHandler = () => {
        const contract = {
            name: this.state.name,
            email:this.state.email,
            message: this.state.message
        }
        console.log(contract);
    }

    render(){
        return (
            <div className="sign-in">
                <form className="input" action="#">
                    <h2>Send me a message</h2>
                    <input  type="text"  placeholder="Name" value={this.state.name} onChange ={this.onNameChangeHandler} required />
                    <br/>
                    <input name="email" placeholder="Email"  type="email"  value={this.state.email} onChange={this.onEmailChangeHandler} required />
                    <br/>
                    <textarea  type="text"  placeholder="Message" value={this.state.message} onChange={this.onMessageChangeHandler} size="100" />
                    <CustomButton type="submit" onClickHandler={this.onClickHandler}>Send</CustomButton>
                </form>
             </div>
        )
    }
    
};