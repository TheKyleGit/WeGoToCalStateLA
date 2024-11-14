import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./Main.css"

import AerialView from "./assets/campus-aerial-view.jpg";

import ProjectRoadmap from "./ProjectRoadmap";

const Blog = () => {
    return (
        <>
            <Container>
                <Container>
                    <div className="text-center">
                        <img
                            src={AerialView}
                            height='500'
                            alt=''
                            loading='lazy'
                            className="align-top" /> {' '}
                    </div>
                </Container>
                <Container>
                    <Card className="text-center mt-3 pt-3">
                        <Card.Title><h3>What is WeGoTo CalStateLA?</h3></Card.Title>
                        <Card.Text>
                            <p>WeGoTo CalStateLA is an attempt to establish a sense of community around those in the social support circle in CalStateLA. <br/>
                            Family members and friends of those attending CSULA are welcomed, and encouraged to join WeGoToCalStateLA<br/>
                            The goal of this app is NOT to become another social media, but to be one stop shop for all things Los Angeles. <br/>
                            It is a place to help foster positivity, support, and engagement in your community. <br/>
                            Our plan is to be able to have one app where people can host large events beach cleanup days, <br/>
                            host small events like a hike, or to even just make sure your keeping up with your own mental health.<br/></p>
                            <h5>If interested, please take a look at some helpful <a href="/resources">resources</a>!</h5>
                        </Card.Text>
                        <hr className="hr hr-blurry" />
                        <Card.Title><h3>Want to help?</h3></Card.Title>
                        <Card.Text>
                            <h5>Please consider taking our survey <a href="https://docs.google.com/forms/d/e/1FAIpQLSetCb2UGkkRdxE0C9ys_TzbPXLvBwvfFXB88zSPhFYKKV4KQA/viewform">here!</a></h5>
                        </Card.Text>
                    </Card>
                </Container>
                <hr className="hr hr-blurry" />
                <Container className="text-center">

                    <ProjectRoadmap />
                    <hr className="hr hr-blurry" />
                    <Container className="text-center">
                    </Container>
                    <Card className="text-center mb-3">
                        <Card.Title className="pt-2"><h4>October 27, 2024</h4></Card.Title>
                        <Card.Text><p style={{ fontSize: "14pt" }}>
                            We are still in the process of collecting more information.<br />We are also working on this very website and some UI elements for our app.
                        </p></Card.Text>
                    </Card>
                </Container>
            </Container>
        </>)
}

export default Blog;
