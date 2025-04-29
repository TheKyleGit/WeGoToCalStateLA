import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./Main.css";

let cardWidth = '18rem';
let cardHeight = '38rem';

const Resources = () => {
    return (
        <>
        <div className="mx-3 my-5">
            <h1 className="text-center">
                While you wait for us to deliver our app,<br/>
                here are some resources you may be interested in!
            </h1>
            <hr className="hr hr-blurry" />
            <Row className="justify-content-md-center my-3">
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
                            <Card.Header className="text-center"><h3>NAMI</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://www.nami.org/">
                                    <Card.Img variant="top" src="https://interimexecs.com/wp-content/uploads/2020/03/NAMI-Logo-300x230.png" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center" ><p>
                                    The National Alliance on Mental Illness (NAMI) is an organization
                                    designed to help with your own mental health. A bit of investigation
                                    into their website will reveal lots of helpful resources to make sure
                                    you have everything you need to stay sane and healthy.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>O*NET</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://services.onetcenter.org/">
                                    <Card.Img variant="top" src="https://www.onetcenter.org/shared/image/onet-circle.png" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                    Need help finding a new job? Maybe you heard about a job 
                                    that interests you, but not exactly sure how to get it.
                                    The Occupation Information Network (O*NET) is a service
                                    that gives you the info you need to find new jobs and the
                                    training/qualification you need for that job.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center my-3">
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>FamilySource Centers</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://communityinvestment.lacity.gov/familysource-centers">
                                    <Card.Img variant="top" src="https://www.kyccla.org/wp-content/uploads/2023/09/FSC-Logo-transparent-1.png" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                    Low income households in Los Angeles may find this resource especially helpful.
                                    FamilySource Centers are available to help with anything from child care 
                                    to tax preparation, so please make sure you visit if you qualify! 
                                    There are a ton of great free or low cost resources available here.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>The Wellness Center LA</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://www.thewellnesscenterla.org/">
                                    <Card.Img variant="top" src="https://static.wixstatic.com/media/7be225_75da01da3b3b4819ad371c1826dc26ab~mv2.png/v1/crop/x_0,y_149,w_1117,h_542/fill/w_201,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TWC%20color%20logo-cmyk.png" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center" ><p>
                                    The Wellness Center at the Historic General Hospital is open to all 
                                    Los Angeles residents. There are plenty of resources available here 
                                    ranging from food insecurity to mental health. 
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>    
        </>)
}

export default Resources;
