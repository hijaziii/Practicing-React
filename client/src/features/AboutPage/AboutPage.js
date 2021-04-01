import { Container, Row, Col, Card } from 'react-bootstrap';

import React from 'react'

const AboutPage = props => {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={4}>
                    <Card>
                        {/* <Card.Img variant="top" src="./Images/software.jpg" /> */}
                        <Card.Body>
                            {props.children}
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage
