import { v4 as uuidv4 } from 'uuid';
import { mockedUsers } from '../constants/loginDb';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_FINISHED = 'LOGIN_FINISHED';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    payload: email,
  };
}
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    payload: password,
  };
}

export function login(email, password, history) {
  return function (dispatch) {
    dispatch({ type: LOGIN_LOADING });

    mockedUsers.map((user) => {
      if (user.email === email && user.password === password) {
        const token = uuidv4();
        localStorage.setItem('token', token);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        return history.push('/');
      }
      return dispatch({ type: LOGIN_ERROR, payload: user.errorMessage });
    });
    dispatch({ type: LOGIN_FINISHED });
  };
}

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case LOGIN_FINISHED: {
      return {
        ...state,
        loading: false,
        email: '',
        password: '',
      };
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
