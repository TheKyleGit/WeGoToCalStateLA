// MainNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import logo from "./assets/CSULALogo.png";
import longlogo from "./assets/CSULALogoLong.png";
import "./Main.css";

const MainNav = () => {
    return (
        <div>
            <Navbar class="Navbar" style={{
                background: 'linear-gradient(180deg, rgba(128,224,60,1) 0%, rgba(245,214,23,1) 100%)',
                fontFamily: 'inter'
            }}>
                <Navbar className="">
                    <Container>
                        <Navbar.Brand href="#home" style={{color:"black", marginLeft:"10px", fontSize:"20pt", fontWeight:"bolder", fontFamily:"inter"}}>WeGoTo
                        <img 
                        src={ longlogo } 
                        height='50' 
                        alt='' 
                        loading='lazy' 
                        className="align-top"/> {' '}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" className="justify-content-center align-items-center" style={{color:"black", fontFamily:"inter"}}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="justify-content-center align-items-center" style={{color:"black", fontFamily:"inter"}}>
                            About Us
                        </Nav.Link>
                        <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSetCb2UGkkRdxE0C9ys_TzbPXLvBwvfFXB88zSPhFYKKV4KQA/viewform" className="justify-content-center align-items-center" style={{color:"white"}}>
                            <Button type="button" class="btn" variant="info">
                                Survey
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MainNav;