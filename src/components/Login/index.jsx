import React, {Component} from 'react';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const inputName = event.target.name
        this.setState({
            [inputName]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}

                     />

                    <input
                        type="text"
                        name="password"
                        value={this.state.username}
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