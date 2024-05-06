// src/components/SignUpForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../src/Component/SignUpCss.css'

const SignUpForm = () => {
    const [userData, setUserData] = useState({
        userName: '',
        emailId: '',
        phoneNumber: '',
        address: '',
        pinCode: '',
        city: '',
        country: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/userData/createUser', userData)
            .then(response => {
                console.log(response.data);
                // Handle successful signup
            })
            .catch(error => {
                console.error('Error signing up:', error);
                // Handle signup error
            });
    };

     return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="userName" value={userData.userName} onChange={handleChange} placeholder="Username" required />
                </div>
                <div className="form-group">
                    <input type="email" name="emailId" value={userData.emailId} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="tel" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                    <input type="text" name="address" value={userData.address} onChange={handleChange} placeholder="Address" required />
                </div>
                <div className="form-group">
                    <input type="text" name="pinCode" value={userData.pinCode} onChange={handleChange} placeholder="Pin Code" required />
                </div>
                <div className="form-group">
                    <input type="text" name="city" value={userData.city} onChange={handleChange} placeholder="City" required />
                </div>
                <div className="form-group">
                    <input type="text" name="country" value={userData.country} onChange={handleChange} placeholder="Country" required />
                </div>
                <div className="form-group">
                    <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <div className="form-group">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};
export default SignUpForm;
