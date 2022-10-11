import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './input';
import Select from './select';

/*---------------------------------------------------------
* Target: Create a reusable form which can be inherited
* TODO(methods): validate, validateProperty, handleSubmit
   handleChange, renderButton, renderSelect, renderInput
* --------------------------------------------------------*/

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    /*---------------------------------------------------------
    * Target: Validate form
    * TODO-1: Get error object with 'Joi.validate()'
       Reference: https://tinyurl.com/3b9ckme2
    * TODO-2: If there is no error return null
    * TODO-3: If there is an error, then map that error array
    *  into an object
    * --------------------------------------------------------*/
    validate = () => {
        // TODO-1
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        // TODO-2
        if (!error) return null;
        // TODO-3
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    /*---------------------------------------------------------
    * Target: Validate property
    * TODO-1:
    * TODO-2:
    * TODO-3:
    * --------------------------------------------------------*/
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;
    };

    handleSubmit = ev => {
        ev.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });

        if (errors) return;

        this.doSubmit(this.state.data);
    }

    handleChange = ({ currentTarget: input }) => {
        const { data, errors } = { ...this.state };
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        data[input.name] = input.value;

        this.setState({ data, errors });
    }

    renderButton = label => {
        return (
            <button
                type="submit"
                className="btn btn-primary"
                disabled={this.validate()}
            >
                {label}
            </button>
        );
    };

    renderSelect = (name, label, options) => {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                label={label}
                error={errors[name]}
                options={options}
                onChange={this.handleChange}
                value={data[name]}
            />
        );
    };

    renderInput = (name, label, type = 'text') => {
        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                label={label}
                type={type}
                onChange={this.handleChange}
                value={data[name]}
                error={errors[name]}
            />
        );
    };
}

export default Form;