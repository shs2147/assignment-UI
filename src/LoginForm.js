// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    });
    const [loginError, setLoginError] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true); // State variable for tracking form type

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/userData/login', loginData)
            .then(response => {
                console.log(response.data);
                // Handle successful login
            })
            .catch(error => {
                console.error('Error logging in:', error);
                setLoginError('Invalid email or password');
            });
    };

    const toggleForm = () => {
        setIsLoginForm(prevState => !prevState);
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {loginError && <p className="error-message">{loginError}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="userName" name="userName" value={loginData.userName} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <div className="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
