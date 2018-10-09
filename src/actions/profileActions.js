import axios from 'axios';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
} from './types';

// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get('http://127.0.0.1:5001/api/profile')
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_PROFILE,
      payload: {},
    }));
};

// Create Profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post('http://127.0.0.1:5001/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
// get all profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get('http://127.0.0.1:5001/api/profile ')
    .then(res => dispatch({
      type: GET_PROFILES,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_PROFILES,
      payload: null,
    }));
};

// Get profile by handle
export const getProfileByHandle = handle => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_PROFILE,
      payload: null,
    }));
};

// Profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING,
});

// Clear profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
});
