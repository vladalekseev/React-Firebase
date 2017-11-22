import React, { Component } from 'react';

export default class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginVal: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleUserInput(e){
        this.setState({
            loginVal: e.target.value, // the value of the text input
        })
    }

    addUser(){
        this.props.addUser(this.state.loginVal);

        this.setState({
            loginVal: '',
        })
    }

    render() {
        return(
            <div>
                <h2>Form</h2>
                <input type="text" placeholder="login" onChange={this.handleUserInput} value={this.state.loginVal} />
                <button onClick={this.addUser}>Send</button>
            </div>
        )
    }
}