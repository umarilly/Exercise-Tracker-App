
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/style.css'

const Navigation = () => {
    return (
        <>
            <div>
                <Navbar expand="lg" className="custom-navbar" bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="/"> Exercise Tracker </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/createuser"> Create User </Nav.Link>
                                <Nav.Link href="/readexercise"> Show Exercise </Nav.Link>
                                <Nav.Link href="/createexercise"> Create Exercise </Nav.Link>
                                <Nav.Link href="/updateexercise"> Update Exercise </Nav.Link>
                                <Nav.Link href="/deleteexercise"> Delete Exercise </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Navigation;
