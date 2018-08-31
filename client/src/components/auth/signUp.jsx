import React, { Component } from 'react';
import { capitalize } from '../../../../server/src/utils/capitalize';
import * as userService from '../../services/user';

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            data: {
                email: '',
                firstname: '',
                lastname: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        userService.all().then((user) => {
            console.log(user)
        })
    };

    handleEmailChange(email) {
        let data = Object.assign({}, this.state.data, { email });
        this.setState({ data });
    };

    handleFirstNameChange(firstname) {
        let data = Object.assign({}, this.state.data, { firstname });
        this.setState({ data });
    };

    handleLastNameChange(lastname) {
        let data = Object.assign({}, this.state.data, { lastname });
        this.setState({ data });
    };

    handlePasswordChange(password) {
        let data = Object.assign({}, this.state.data, { password });
        this.setState({ data });
    };

    signUp() {
        //e.preventDefault();
        userService.create(this.state.data).then((x) => {
            console.log(x);
        })
    };

    signUpContent() {
        return (
            <div className="sign-up-container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h5 style={{ textAlign: 'center' }}>Sign Up.</h5>
                <form className="sign-up-form" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname</label>
                        <input id="firstname" className="form-control" type="firstname" onChange={(e) => this.handleFirstNameChange(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname</label>
                        <input id="lastname" className="form-control" type="lastname" onChange={(e) => this.handleLastNameChange(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                    </div>
                    <p>Already Registered? Click <span><a href="/login">here</a></span> to login</p>
                    <a 
                    href="/login"
                    style={{ padding: '8px', background: 'blue', color: 'white' }}
                    className="sign-up-submit-btn" 
                    onClick={() => {
                        this.signUp()
                    }}>Register</a>
                </form>

            </div>
        )
    }
    render() {
        return this.signUpContent()
    }
};



//{this.formGroup('email', this.handleEmailChange)}
//{this.formGroup('firstname', this.handleFirstNameChange)}
//{this.formGroup('lastname', this.handleLastNameChange)}
//{this.formGroup('password', this.handlePasswordChange)}