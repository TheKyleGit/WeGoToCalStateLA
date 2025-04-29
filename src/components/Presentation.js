import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./Main.css"

const Presentation = () => {
    return (
        <>
            <Container>
            <div class="embed-responsive embed-responsive-16by9 text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Lr-VWD0FDE4?si=k1u4JEsLCK1HH7RN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </Container>
        </>)
}

export default Presentation;
