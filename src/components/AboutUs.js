import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./Main.css";

let cardWidth = '18rem';
let cardHeight = '36rem';

const AboutUs = () => {
    return (
        <>
        <div className="mx-3 my-5">
            <h1 className="text-center">
                Learn a little bit more about the team.<br/>
                
            </h1>
            <hr className="hr hr-blurry" />
            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Weston Wood</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Weston Wood is a knowledgeable and dependable leader who plays a key role in the development of We Go To Cal State LA. 
                                His strong programming skills and consistent reliability make him a cornerstone of the team, 
                                always ready to guide and support others.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Cem Teker</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Cem is a talented programmer with a strong grasp of backend systems. 
                                His technical insight and problem-solving skills make him a valuable asset to any project, 
                                always ready to dive deep into the code and deliver solid, reliable solutions.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Kaelyn Taing</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Kaelyn has a keen eye for design and consistently brings creativity and style to her UI/UX work. 
                                Her ability to make interfaces both beautiful and user-friendly showcases her natural talent for visual storytelling and thoughtful design.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Vincent Rodriguez</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Vincent has been a driving voice in shaping the direction of our project, offering thoughtful suggestions that have contributed to its success. 
                                Alongside his leadership, he brings strong backend development skills that help keep everything running smoothly behind the scenes.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Ryan Kwan</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Ryan has been an incredibly valuable and hardworking member of the team. 
                                His talent in programming—especially with React Native on the front end—has been essential to the project’s progress.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Salvador Gonzalez</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Salvador has been a tremendous help across multiple aspects of development, 
                                contributing to documentation, front-end design, and back-end functionality. 
                                His versatility and willingness to step in wherever needed have made him an invaluable part of the team.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Jose Escobar</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Jose is a fantastic front-end developer who played a major role in shaping the style and design of the user application. 
                                His work made the app both visually appealing and highly functional, enhancing the overall user experience in a big way.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Adam Dixon</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Adam played a major role in developing the chatbot, working on both the front-end and back-end to ensure its smooth functionality. 
                                His work on the chatbot wrapper was crucial in bringing together the different components and creating a seamless user experience.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Kyle Chau</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Kyle was foundational in building the back-end architecture of the project. 
                                His work behind the scenes brought all the essential parts together, creating the strong and reliable structure that powers the application.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Uriel Baldesco</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Ueiral has been an incredible source of knowledge, serving as our resident expert in machine learning and AI. 
                                She played a key role in formulating and building the chatbot, bringing it to life with her technical expertise and innovative thinking.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: cardWidth, height: cardHeight}}>
                            <Card.Header className="text-center"><h3>Darius Ayvazian</h3></Card.Header>
                            <Card.Body>
                                <Card.Link href="https://211la.org/">
                                    <Card.Img variant="top" src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" />
                                </Card.Link>
                                <hr className="hr hr-blurry" />
                                <Card.Text className="text-center"><p>
                                Darius has been a steady voice of reason and a source of deep knowledge in backend systems.
                                His expertise in backend architecture was instrumental in helping us build a cohesive and well-structured project.
                                </p></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>    
        </>)
}

export default AboutUs;
