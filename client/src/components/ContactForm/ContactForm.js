import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
// import { createOrderRequest } from '../redux/thunks';
import { createContactRequest } from '../../redux/Contacts/thunks';
import { Form, Button } from 'react-bootstrap';



const ContactForm = props => {

    const [state, setState] = useState({}); // 
    const emailAddressElement = useRef(null); //  clear input without refreshing 
    const fullNameElement = useRef(null); // clear input without refreshing 
    const messageTextElement = useRef(null); // clear input without refreshing 

    useEffect(() => {
        console.log(state);
    }, [state])

    const onChangeHandeler = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

    return (
        <div>
            <h1>Contact US</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="Email Address" ref={emailAddressElement} onChange={e => { onChangeHandeler(e) }} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="Full Name" ref={fullNameElement} onChange={e => { onChangeHandeler(e) }} type="text" placeholder="Enter Full Name" />
                    <Form.Text className="text-muted">
                        Please enter your full name.
    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name="Message" ref={messageTextElement} onChange={e => { onChangeHandeler(e) }} as="textarea" rows={3} placeholder="Enter Your Message" />
                    <Form.Text className="text-muted">
                        Please describe what type of project you want us to do.
    </Form.Text>
                </Form.Group>
                <Button variant="dark" onClick={
                    (e) => {
                        e.preventDefault(); // wont let the browser refesh 
                        emailAddressElement.current.value = ""; // clear input with out refreshing 
                        fullNameElement.current.value = ""; // clear input with out refreshing 
                        messageTextElement.current.value = ""; // clear input with out refreshing 
                        setState({}) // will clear state
                        props.createContactRequest(state)
                    }} >
                    Submit
                </Button>{' '}
            </Form>
        </div>
    )
}
// Redux
const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // addAnswersRequest: (obj) => dispatch(addTodoRequest(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
        // createOrderRequest: (obj) => dispatch(createOrderRequest(obj)),
        createContactRequest: (obj) => dispatch(createContactRequest(obj)),
    }

}



export default
    // ContactForm
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ContactForm)