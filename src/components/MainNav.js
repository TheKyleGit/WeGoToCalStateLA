// MainNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import logo from "./assets/CSULALogo.png";
import longlogo from "./assets/NewCSULogo.png";
import './Main.css';

const MainNav = () => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, rgba(128,224,60,1) 0%, rgba(245,214,23,1) 100%)',
            fontFamily: 'inter'
        }}>
            <Navbar class="Navbar"> 
                <Navbar>
                    <Navbar.Brand href="/" style={{color:"black", marginLeft:"10px", fontSize:"20pt", fontWeight:"bolder", fontFamily:"inter"}}>
                    <img 
                    src={ longlogo } 
                    height='50' 
                    alt='' 
                    loading='lazy' 
                    className="align-top"/> {' '}
                    </Navbar.Brand>
                </Navbar>
            <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav className="justify-content-center align-items-center">
                        <Nav.Link href="/" className="justify-content-center align-items-center">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/aboutus" className="justify-content-center align-items-center">
                            About Us
                        </Nav.Link>
                        <Nav.Link href="/resources" className="justify-content-center align-items-center">
                            Resources
                        </Nav.Link>
                        <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSetCb2UGkkRdxE0C9ys_TzbPXLvBwvfFXB88zSPhFYKKV4KQA/viewform" className="justify-content-center align-items-center" style={{color:"white"}}>
                            <Button type="button" class="btn btn-outline-primary">
                                Survey
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr className="hr hr-blurry" />
        </div>
        
    )
}

export default MainNav;