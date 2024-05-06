// src/components/AuthToggle.js
import React from 'react';

const AuthToggle = ({ isLoginForm, toggleForm }) => {
    return (
        <button onClick={toggleForm}>{isLoginForm ? "Sign Up" : "Login"}</button>
    );
};

export default AuthToggle;
 