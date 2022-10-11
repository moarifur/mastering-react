import React from 'react';
import Joi from 'joi-browser';

import Form from './common/form';

/*---------------------------------------------------------
* Target: Create a reusable input field with validation
* TODO-1: Use rest parameter - https://tinyurl.com/vn4zt42t
* TODO-2: Conditional rendering for error handling
* --------------------------------------------------------*/

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = (data) => {
        // Call the server
        console.log('Submitted', data);
    };

    render() {
        return (
            <div className='container mt-5'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;