
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigation = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/users/login', formData);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);

            navigation('/');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default UserLogin;

