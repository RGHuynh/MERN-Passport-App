import React, {Component} from 'react';

export default class Signup extends Component {
    constructor(){
        super();
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange(event) {
        console.log(this.state.username)
        this.setState({ 
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        console.log(this.state.password)
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event) {
        
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />

                    <label htmlFor="password">Password: </label>
                    <input 
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <input 
                        type="submit" 
                        value="Submit"
                    />
                </form>

            </div>
            
        );
    }
}