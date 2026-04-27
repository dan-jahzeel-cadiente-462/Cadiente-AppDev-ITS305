import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  CLEAR_AUTH_ERROR,
} from '../actions';

const initialState = {
  isLoading: false,
  isSignedIn: false,
  user: null,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSignedIn: false,
        user: null,
        token: null,
        error: action.payload.error,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignedIn: false,
        user: null,
        token: null,
      };

    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
