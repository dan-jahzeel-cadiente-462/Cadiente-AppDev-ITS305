// Auth Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR';

// Action Creators
export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const registerRequest = (username, password, confirmPassword) => ({
  type: REGISTER_REQUEST,
  payload: { username, password, confirmPassword },
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: { user },
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: { error },
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR,
});
