import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.currentTarget.name === 'email') {
      setEmail(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'password') {
      setPassword(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email: email, password: password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form
      style={{
        maxWidth: '600px',
        margin: '0 auto',
      }}
      onSubmit={handleSubmit}
    >
      <h2 style={{ margin: '40px 0' }}>Log In</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
}

export default LogIn;
