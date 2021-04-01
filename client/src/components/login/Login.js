import React, { Fragment, useState, 
  // useEffect 
} from 'react';
// import {Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Login = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const history = useHistory();
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.login(email, password);
    history.push('/');
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
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email" 
        placeholder="Enter email" 
        name='email'
        value={email} 
        onChange={onChange}
        required />
        <Form.Text className="text-muted">
          Please enter your email address.
    </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        name='password'
        value={password}
        onChange={onChange}
        minLength='6'
        />
        <Form.Text className="text-muted">
          Please enter your password.
    </Form.Text>
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
  </Button>
    </Form>
   
        </Fragment>
  );
}

export default Login;
