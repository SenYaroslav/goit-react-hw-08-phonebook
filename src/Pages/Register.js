import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSingup } from 'redux/auth/authOperations';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'email') {
      setEmail(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'password') {
      setPassword(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(userSingup({ name, email, password }));

    reset();
  };

  const reset = () => {
    setName('');
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
      <h2 style={{ margin: '40px 0' }}>Registration</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          placeholder="Please enter your name"
          onChange={handleChange}
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Please enter your email"
          onChange={handleChange}
          value={email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Finaly, create your password"
          minLength={7}
          onChange={handleChange}
          value={password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
