import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../util/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('http://127.0.0.1:5001/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

// Login User and get the TOKEN

export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('http://127.0.0.1:5001/api/users/login', userData)
    .then((res) => {
      // save response to local storage
      const { token } = res.data;
      // set token and store it to local storage
      localStorage.setItem('jwtToken', token);
      // set Token to Header
      setAuthToken(token);
      // decode token
      const decoded = jwtDecode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
      // history.push('/login')
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

// set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const logoutUser = () => (dispatch) => {
  // remove token

  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser());
};
