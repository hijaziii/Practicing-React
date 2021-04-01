import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';



const LoginRegisterPage = props => {
    return (
        <Container>

            <Row className="mt-5">
                <Col xs={6}>
                    <Card>
                        {/* <Card.Img variant="top" src="./Images/software.jpg" /> */}
                        <Card.Body>
                            {props.login}
                            {/* {props.children} */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card>
                        {/* <Card.Img variant="top" src="./Images/software.jpg" /> */}
                        <Card.Body>
                            {props.register}
                            {/* {props.children} */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginRegisterPage
