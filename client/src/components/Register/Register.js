/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useHistory } from "react-router-dom";

import React, {
    useState,
    useEffect,
} from 'react'
import { Form, Button, Col, Alert } from 'react-bootstrap';

const Register = props => {

    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });
    const [state, setState] = useState({
    });

    // const emailElement = useRef()   Part of Clearing Input 
    // const passwordElement = useRef()   Part of Clearing Input 
    // const confirmPasswordElement = useRef()     Part of Clearing Input 

    const { email, password, confirm_password } = formData;

    const validate = (input) => {
        let errors = {};
        let isValid = true;


        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }


        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["password"] = <Alert variant="danger">Passwords don't match.</Alert>;
            }
        }

        setState({
            errors: errors
        });

        return isValid;
    }


    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });



    useEffect(() => {
        if (props.isAuthenticated) {
            history.push('/')
        }
    }, [props.isAuthenticated])

    const submitHandler = (event) => {
        event.preventDefault();
        // multiple property validation could go here
        if (validate(formData)
        ) {

            props.register(formData);
            // event.target.className += " was-validated";
            console.log("dispatch an action");
            console.log(props.err);



            //Note Clearing Inputs using useRef
            // emailElement.current.value = "";
            // passwordElement.current.value = "";
            // confirmPasswordElement.current.value = "";

            //  Note Clearing Inputs
            // setFormData({
            //     email: '',
            //     password: '',
            //     confirm_password: ''
            // });


            // alert('You Are Registered Now');
        }
    };
    return (
        <>
            <h1 className='large text-primary'>Register</h1>
            <hr></hr>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        // ref={emailElement}  Part of Clrearing input
                        isInvalid={state['errors'] && state['errors']['email']}
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={email}
                        onChange={onChange}
                        required />
                </Form.Group>
                <Form.Text className="text-muted">
                    Please enter a valid email address.
                            {props.err && props.err['errors'] ? props.err['errors'].map(e => <Alert key={e.msg} variant="danger">{e.msg}</Alert>) : 'Email already exist.'}
                </Form.Text>
                <br />
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            // ref={passwordElement}  Part of Clrearing input
                            isInvalid={state['errors'] && state['errors']['password']}
                            type="password"
                            placeholder="Password"
                            name='password'
                            value={password}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 to 12 characters"
                            onChange={onChange}
                        />
                        {/* <Form.Text className="text-muted">
                            {state['errors'] && state['errors']['password'] ? state['errors']['password'] : 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 to 12 characters'}
                        </Form.Text> */}
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridRepeat-Password">
                        <Form.Label>Re-enter password</Form.Label>
                        <Form.Control
                            // ref={confirmPasswordElement}  Part of Clrearing input
                            isInvalid={state['errors'] && state['errors']['password']}
                            type="password"
                            placeholder=" Confirm password"
                            name='confirm_password'
                            value={confirm_password}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 to 12 characters"
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        {state['errors'] && state['errors']['password'] ? state['errors']['password'] : 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 to 12 characters'}
                    </Form.Text>
                </Form.Row>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Register
