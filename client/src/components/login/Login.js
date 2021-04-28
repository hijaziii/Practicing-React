/* eslint-disable no-unused-vars */
import React, { Fragment, useState} from 'react';
// import {Redirect } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';


const Login = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

const [state, setState] = useState({
  });

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
      errors["email"] = "Please enter a valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    setState({
      errors: errors
    });

    return isValid;
}

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value }); 

  const onSubmit = (e) => {
    e.preventDefault(); 
    if (validate(formData)) {
      props.login(formData);
        // console.log("dispatch an action");
        // console.log(props.err);
    }
  };
  return (
    <Fragment>
    {props.isAuthenticated ? (
              <h1 className='large text-primary'>You're already signed in</h1>
            ) : (
              <h1 className='large text-primary'>Sign In</h1>
            )}
            <hr></hr>
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
                <Form.Control
                // ref={emailEle}dDD
                    isInvalid={props.err && props.err['errors']}
                    type="email" 
                    placeholder="Enter email" 
                    name='email'
                    value={email} 
                    onChange={onChange}
                    required 
                />
      </Form.Group>
        <Form.Text className="text-muted">
          Please enter your email address.
          {/* props.err is  redux login.js line 13  */}
          {props.err && props.err['errors'] ? props.err['errors'].map(e => <Alert key={e.msg} variant="danger">{e.msg}</Alert>) : 'Email already exist.'} 
          {state['errors'] && state['errors']['email'] ? <Alert variant="danger">{state['errors']['email']}</Alert> : null} 
        </Form.Text>
      <br/>
      <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control 
              // ref={passEle}
                  isInvalid={props.err && props.err['errors']}
                  type="password" 
                  placeholder="Password" 
                  name='password'
                  value={password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 to 12 characters"
                  onChange={onChange}
                  minLength='6'
              />
      </Form.Group>
        <Form.Text className="text-muted">
          {state['errors'] && state['errors']['password'] ? state['errors']['password'] : 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 to 12 characters'}
        </Form.Text>
        <br/>
            <Button  variant="primary" type="submit">
              Submit
            </Button>
    </Form>
   
        </Fragment>
  );
}

export default Login;

