import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { changeEmail, changePassword, login } from '../store/LoginReducer';
import { LoginView } from './LoginView';
import { Error } from './ui/Error';

export const LoginMain = () => {
  // TODO:
  // make a dispatch with the info sended, the action creator must compare mocked users with the submitted
  // give a response
  const history = useHistory();
  const { email, password, error, loading } = useSelector(({ userReducer }) => {
    return {
      email: userReducer.email,
      password: userReducer.password,
      error: userReducer.error,
      loading: userReducer.loading,
    };
  });
  // eslint-disable-next-line no-shadow
  // const state = useSelector((state) => {
  //   console.log(state.state);
  // });
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
        {/* <Row className="justify-content-center align-items-center"> */}
        {/* <Col className="col-3"> */}
        <LoginView
          email={email}
          password={password}
          handleSubmit={handleSubmit}
          handleOnchangeEmail={handleOnchangeEmail}
          handleOnchangePassword={handleOnchangePassword}
          error={error}
        />
        {/* </Col> */}
        {/* </Row> */}
      </div>
    </>
  );
};
