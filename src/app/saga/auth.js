import { call, put, takeLatest } from 'redux-saga/effects';
import { loginAPI, registerAPI, logoutAPI } from '../api/auth';
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  logoutSuccess,
} from '../actions';

function* loginSaga(action) {
  try {
    const { username, password } = action.payload;
    const response = yield call(loginAPI, username, password);
    const { token, user } = response;
    global.authToken = token;
    yield put(loginSuccess(user, token));
  } catch (error) {
    yield put(loginFailure(error.message || 'Login failed'));
  }
}

function* registerSaga(action) {
  try {
    const { username, password, confirmPassword } = action.payload;
    const response = yield call(registerAPI, username, password, confirmPassword);
    yield put(registerSuccess(response.user));
  } catch (error) {
    yield put(registerFailure(error.message || 'Registration failed'));
  }
}

function* logoutSaga() {
  try {
    yield call(logoutAPI);
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    global.authToken = null;
    yield put(logoutSuccess());
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}
