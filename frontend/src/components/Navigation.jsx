
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';

import '../styles/style.css'

const Navigation = () => {

    const navigation = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');
    const username = localStorage.getItem('username');


    const handleLogout = () => {
        localStorage.removeItem('token');
        navigation('/')
    };

    return (
        <>
            <div>
                <Navbar expand="lg" className="custom-navbar" bg="dark" data-bs-theme="dark">

                    <div className='custom-navbar-inside'>

                        <div className='custom-navbar-brand' >
                            <Navbar.Brand href="/"> Exercise Tracker </Navbar.Brand>
                        </div>

                        <div className='custom-navbar-toggle' >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>

                        <div className='custom-navbar-auth'>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    {isAuthenticated ? (
                                        <>
                                            <Nav.Link>
                                                <button className='btn btn-danger' onClick={handleLogout} > Log Out </button>
                                            </Nav.Link>
                                            <Nav.Link href='/dashboard' >
                                                <h5 className='custom-navbar-username' > {username} </h5>
                                            </Nav.Link>
                                        </>

                                    ) : (
                                        <>
                                            <Nav.Link href="/signup">
                                                <button className='btn btn-primary'> Sign In </button>
                                            </Nav.Link>
                                            <Nav.Link href="/login">
                                                <button className='btn btn-primary' > Login </button>
                                            </Nav.Link>
                                        </>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </div>

                    </div>

                </Navbar>
            </div>
        </>
    );
};

export default Navigation;
