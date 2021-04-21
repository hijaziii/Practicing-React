import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Alert,
    Tabs,
    Tab,
    Image,
} from "react-bootstrap";

const LoginRegisterPage = (props) => {
    console.log(props);
    return (
        <Container>
            <Row>
                {/* {props.err && props.err['errors'] ? props.err['errors'].map(e => <Alert key={e.msg} variant="danger">{e.msg}</Alert>) : null} */}
            </Row>
            <Row className="mt-5">
                <Col xs={6}>
                    <Card style={{ height: '100%' }}>
                        <Card.Header>Smart Developers</Card.Header>
                        <Image variant="top" src="./Images/image.jpg" style={{ height: '100%' }} />
                        <Card.Body>
                            {/* {props.login} */}
                            {/* {props.children} */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Tabs defaultActiveKey="Sign In" id="uncontrolled-tab-example">
                        <Tab eventKey="Sign In" title="Sign In">
                            <Card >
                                {/* <Card.Img variant="top" src="./Images/software.jpg" /> */}
                                <Card.Body>
                                    {props.login}
                                    {/* {props.children} */}
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="Register" title="Register">
                            <Card >
                                {/* <Card.Img variant="top" src="./Images/software.jpg" /> */}
                                <Card.Body>
                                    {props.register}
                                    {/* {props.children} */}
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginRegisterPage;
