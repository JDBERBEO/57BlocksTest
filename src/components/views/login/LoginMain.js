import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  changeEmail,
  changePassword,
  login,
} from '../../../store/LoginReducer';
import { LoginView } from './LoginView';

export const LoginMain = () => {
  const history = useHistory();
  const { email, password, error, loading } = useSelector(({ userReducer }) => {
    return {
      email: userReducer.email,
      password: userReducer.password,
      error: userReducer.error,
      loading: userReducer.loading,
    };
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, history));
  };

  const handleOnchangeEmail = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  const handleOnchangePassword = (e) => {
    dispatch(changePassword(e.target.value));
  };

  return (
    <>
      <div className=".container">
        <LoginView
          email={email}
          password={password}
          handleSubmit={handleSubmit}
          handleOnchangeEmail={handleOnchangeEmail}
          handleOnchangePassword={handleOnchangePassword}
          error={error}
        />
      </div>
    </>
  );
};
