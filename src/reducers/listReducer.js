import {
  ADD_LIST, GET_LISTS, GET_LIST, DELETE_LIST, LIST_LOADING,
} from '../actions/types';

const initialState = {
  lists: [],
  list: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LISTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_LIST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case ADD_LIST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case DELETE_LIST:
      return {
        ...state,
        posts: state.lists.filter(list => list._id !== action.payload),
      };
    default:
      return state;
  }
}
