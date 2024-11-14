import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./Main.css";

let cardWidth = '18rem';
let cardHeight = '36rem';

const Resources = () => {
    return (
        <>
        <div className="mx-3 my-5">
            <h1 className="text-center">
                While you wait for us to deliver our app,<br/>
                here are some resources you may be interested in!
            </h1>
            <hr className="hr hr-blurry" />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>211 LA</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1394901270620565504/xoE0Ge-A_400x400.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                    211LA.org is a one stop shop for all things LA County. There are so many amazing resources
                                    available to you at your fingertips. If you need help finding or are just curious about resources
                                    available in LA County, make 211LA your first stop.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>211 LA</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1394901270620565504/xoE0Ge-A_400x400.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                    211LA.org is a one stop shop for all things LA County. There are so many amazing resources
                                    available to you at your fingertips. If you need help finding or are just curious about resources
                                    available in LA County, make 211LA your first stop.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>211 LA</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1394901270620565504/xoE0Ge-A_400x400.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                    211LA.org is a one stop shop for all things LA County. There are so many amazing resources
                                    available to you at your fingertips. If you need help finding or are just curious about resources
                                    available in LA County, make 211LA your first stop.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>    
        </>)
}

export default Resources;
