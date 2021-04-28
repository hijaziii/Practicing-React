import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Tabs,
    Tab,
    Image,
} from "react-bootstrap";

const LoginRegisterPage = (props) => {
    console.log(props);
    return (
        <Container>
            <Row className="mt-5">
                <Col lg={6}>
                    <Card style={{ height: '100%', color: 'blue' }} >
                        <Image variant="top" src="./Images/image.jpg" style={{ height: '100%' }} />
                    </Card>
                </Col>
                <Col lg={6}>
                    <Tabs
                        defaultActiveKey="Sign In"
                        id="uncontrolled-tab-example"
                        onSelect={() => { props.clearAuthErr() }}
                    >
                        <Tab eventKey="Sign In" title="Sign In">
                            <Card>
                                {/* <Card.Img variant="top" src="./Images/software.jpg" /> */}
                                <Card.Body>
                                    {props.login}
                                    {/* {props.children} */}
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="Register" title="Register">
                            <Card>
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
