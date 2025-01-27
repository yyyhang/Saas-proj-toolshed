// // Register Form implemented via redux-forms according to https://medium.com/technest/implement-user-auth-in-a-django-react-app-with-knox-fc56cdc9211c

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../actions/auth';

class RegisterForm extends Component {
    renderField = ({ input, label, type, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} type={type} />
                {touched && error && (
                    <span className="ui pointing red basic label">{error}</span>
                )}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.register(formValues);
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        return (
            <div className="ui container mb-5">
                <h1 className="ui header mt-5">Sign Up</h1>
                <div className="ui segment">
                    <form
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className="ui form"
                    >
                        {/* The "validate" property allows for programmatic definitions of field validations */}
                        <Field
                            name="username"
                            type="text"
                            component={this.renderField}
                            label="Username"
                            validate={[required, minLength3, maxLength15]}
                        />
                        <Field
                            name="first_name"
                            type="text"
                            component={this.renderField}
                            label="First Name"
                            validate={[required, minLength1, maxLength40]}
                        />
                        <Field
                            name="last_name"
                            type="text"
                            component={this.renderField}
                            label="Last Name"
                            validate={[required, minLength1, maxLength40]}
                        />
                        <Field
                            name="email"
                            type="email"
                            component={this.renderField}
                            label="Email"
                            validate={required}
                        />
                        <Field
                            name="password"
                            type="password"
                            component={this.renderField}
                            label="Password"
                            validate={required}
                        />
                        <Field
                            name="password2"
                            type="password"
                            component={this.renderField}
                            label="Confirm Password"
                            validate={[required, passwordsMatch]}
                        />
                        <button className="ui primary button">Register</button>
                    </form>
                    <p style={{ marginTop: '1rem' }}>
                        Already have an account?{' '}
                        <Link to="/login">
                            <strong className="ml-1">Login Here</strong>
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}

// Field validation functions to be used on field-level
const required = (value) => (value ? undefined : 'Required');

const minLength = (min) => (value) =>
    value && value.length < min
        ? `Must be at least ${min} characters`
        : undefined;

const minLength3 = minLength(3);
const minLength1 = minLength(1);

const maxLength = (max) => (value) =>
    value && value.length > max
        ? `Must be ${max} characters or less`
        : undefined;

const maxLength15 = maxLength(15);
const maxLength40 = maxLength(40);

const passwordsMatch = (value, allValues) =>
    value !== allValues.password ? 'Passwords do not match' : undefined;

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

RegisterForm = connect(mapStateToProps, { register })(RegisterForm);

export default reduxForm({
    form: 'registerForm',
})(RegisterForm);
