import axios from 'axios';
import {
  ADD_LIST,
  GET_LISTS,
  GET_LIST,
  DELETE_LIST,
  LIST_LOADING,
  GET_ERRORS,
  CLEAR_ERRORS,
  POST_LOADING,
} from './types';

export const addList = postData => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post('/api/lists', postData)
    .then(res => dispatch({
      type: ADD_LIST,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

// Get Posts
export const getLists = () => (dispatch) => {
  dispatch(setListLoading());
  axios
    .get('/api/lists')
    .then(res => dispatch({
      type: GET_LISTS,
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: GET_LISTS,
      payload: null,
    }));
};
// Set loading state
export const setListLoading = () => ({
  type: POST_LOADING,
});

// Clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
