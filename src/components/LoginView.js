import { ButtonBase } from '@mui/material';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginView.css';

export const LoginView = ({
  email,
  password,
  handleSubmit,
  handleOnchangeEmail,
  handleOnchangePassword,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <img
            src="https://res.cloudinary.com/dj7wucuvf/image/upload/v1635651432/57BlocksTest/a6078c-2fd9033b2be04c9b947d1aac6cdaef60-a2551_awp0jl.gif"
            alt="pokemon header"
          />
          <input
            type="email"
            placeholder="Enter email"
            onChange={handleOnchangeEmail}
            value={email}
          />
          <ButtonBase />
        </div>
      </form>
    </>
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       type="email"
    //       placeholder="Enter email"
    //       onChange={handleOnchangeEmail}
    //       value={email}
    //     />
    //     <Form.Text className="text-muted">
    //       Well never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       type="password"
    //       placeholder="Password"
    //       onChange={handleOnchangePassword}
    //       value={password}
    //     />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Login
    //   </Button>
    // </Form>
  );
};
