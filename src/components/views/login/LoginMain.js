import React from 'react';

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
  const { email, password, error } = useSelector(({ userReducer }) => {
    return {
      email: userReducer.email,
      password: userReducer.password,
      error: userReducer.error,
    };
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
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
