import React from 'react';
import Joi from 'joi-browser';

import Form from './common/form';

/*---------------------------------------------------------
* Target: Create a reusable input field with validation
* TODO-1: Use rest parameter - https://tinyurl.com/vn4zt42t
* TODO-2: Conditional rendering for error handling
* --------------------------------------------------------*/

class RegisterForm extends Form {
    state = {
        data: { email: '', password: '', username: '' },
        errors: {}
    };

    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(5).required().label('Password'),
        username: Joi.string().required().label('Username'),
    };

    doSubmit = (data) => {
        // Call the server
        console.log('Registered', data);
    };

    render() {
        return (
            <div className='container mt-5'>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'Email', 'email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('username', 'Username')}
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}

export default RegisterForm;