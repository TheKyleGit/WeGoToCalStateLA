import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./Main.css"

import AerialView from "./assets/campus-aerial-view.jpg";

const Blog = () => {
    return (
        <>
        <Row>
            <Col className="text-center">
                <img
                    src={AerialView}
                    height='500'
                    alt=''
                    loading='lazy'
                    className="align-top mb-3" /> {' '}
            </Col>
        </Row>
        <Row className="text-center pt-3 justify-content-center" md="auto">
            <Col lg="6" className="justify-content-center">
                <h2>What is WeGoTo CalStateLA?</h2>
                <p md="auto">WeGoTo CalStateLA is an attempt to establish a sense of community around those in the social support circle in CalStateLA. The goal of this app is NOT to become another social media, but to be one stop shop for all things Los Angeles. It is a place to help foster positivity, support, and engagement in your community. Our plan is to be able to have one app where people can host large events beach cleanup days, host small events like a hike, or to even just make sure your keeping up with your own mental health.</p>
                <h5>If you or you are in the support network of someone who goes to Cal State LA, then this app is for you!</h5>
                <br />
                <h3>Want to help?</h3>
                <h5>Please consider taking our survey <a href="https://docs.google.com/forms/d/e/1FAIpQLSetCb2UGkkRdxE0C9ys_TzbPXLvBwvfFXB88zSPhFYKKV4KQA/viewform">here!</a></h5>
            </Col>
        </Row>
        <hr className="hr hr-blurry" />
        <Row className="justify-content-center text-center">
            <Col lg="6">
            <h2>
                Curious on our progress? Keep reading!
            </h2>
            <Card className="text-center mb-3">
                <Card.Title className="pt-2" style={{fontWeight: "bold"}}><h4 style={{fontWeight: "bold"}}>October 27, 2024</h4></Card.Title>
                <Card.Text><p style={{fontSize: "14pt"}}>
                    We are still in the process of collecting more information.<br/>We are also working on this very website and some UI elements for our app.
                </p></Card.Text>
            </Card>
            </Col>
        </Row>
        </>)
}

export default Blog;
