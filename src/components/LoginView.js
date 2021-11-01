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
  error,
}) => {
  return (
    <>
      <div className="loginCard">
        <form className="loginForm" onSubmit={handleSubmit}>
          <img
            className="loginHeader"
            src="https://res.cloudinary.com/dj7wucuvf/image/upload/v1635787986/57BlocksTest/pokemonLogo-removebg-preview_fqboty.png"
            alt="pokemon header"
          />
          <div>
            <label htmlFor="email">PokeTrainer Email Address:</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={handleOnchangeEmail}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="email">PokeTrainer Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={handleOnchangePassword}
              value={password}
            />
            {error ? (
              <p className="loginError">User or password does not exist</p>
            ) : null}
          </div>
          <Button variant="primary" type="submit" className="loginButton">
            Login
          </Button>
        </form>
      </div>
    </>
  );
};
