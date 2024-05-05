import React from "react"
import { Container,Row,Col } from "react-bootstrap"

const Home = () =>{
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h1>Home Page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Practice</h3>
                    <p>
                        Repeat the following: <br/>
                        “Hello My name is David”
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home