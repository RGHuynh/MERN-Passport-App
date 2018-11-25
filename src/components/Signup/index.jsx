import React, {Component} from 'react';

export default class Signup extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(event) {
        const name = event.target.name
        this.setState({ 
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
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
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password: </label>
                    <input 
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
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