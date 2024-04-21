
import React, { useState } from 'react';
import axios from 'axios';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import Lock from '../images/lock.png';
import Message from '../images/message.png';
import Profile from '../images/profile.png';

const UserSignup = () => {

    const [errorMsg, setErrorMsg] = useState("");

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            setErrorMsg("Please fill in all the required fields.");
        } else if (formData.password !== formData.confirmPassword) {
            setErrorMsg("Passwords do not match.");
        } else {
            try {
                const res = await axios.post('http://localhost:5000/users/signup', formData);
                console.log(res.data);
                setErrorMsg('Account created, please login now')
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };

    return (
        <>
            <div className='sighup-heading' > 
                <div><h2> Sign Up </h2></div> 
            </div>

            <div className='signup-container' >


                <div className='signup-form' >

                    <form onSubmit={handleSubmit}>

                        <div className='form-group'>
                            <label htmlFor='input1' className='form-label'>Name</label>
                            <div className='outside-form-input'>
                                <div className='img-box' > <img src={Profile} alt="" /> </div>
                                <input
                                    className='form-input'
                                    style={{ border: '0px' }}
                                    id='input1'
                                    type='text'
                                    name='username'
                                    placeholder='Name'
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='input2' className='form-label'>Email</label>
                            <div className='outside-form-input'>
                                <div className='img-box' > <img src={Message} alt="" /> </div>
                                <input
                                    className='form-input'
                                    style={{ border: '0px' }}
                                    id='input2'
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='input3' className='form-label'>Password</label>
                            <div className='outside-form-input'>
                                <div className='img-box' > <img src={Lock} alt="" /> </div>
                                <input
                                    className='form-input'
                                    style={{ border: '0px' }}
                                    id='input3'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='input4' className='form-label'>Re-Write Password</label>
                            <div className='outside-form-input'>
                                <div className='img-box' > <img src={Lock} alt="" /> </div>
                                <input
                                    className='form-input'
                                    style={{ border: '0px' }}
                                    id='input4'
                                    type='password'
                                    name='confirmPassword'
                                    placeholder='Password Again'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h4 style={{ color: 'red', marginBottom: '20px' }}  > {errorMsg} </h4>
                            </div>
                        </div>

                        <div className='pre-btn-signup' >
                            <button
                                type='submit'
                                className='form-button-signup'
                            > Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='outer-form' >
                        <div className='Extra-out-google-btn' >
                            <p className='text-for-already-account'> Already have an account ? </p>
                        </div>
                        <div className="already-account" >
                            <RouterLink to="/login">
                                <button className='already-account-button'>
                                    Log In
                                </button>
                            </RouterLink>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default UserSignup;





