// redux/reducers/index.js
// redux/sagas/userSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS, fetchUsersSuccess, fetchUsersFailure, ADD_USER } from '../actions/userActions';

function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'https://67055f04031fd46a830fb4fb.mockapi.io/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* addUser(action) {
  try {
    const response = yield call(axios.post, 'https://67055f04031fd46a830fb4fb.mockapi.io/users', { content: action.payload });
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USERS, fetchUsers);
  yield takeLatest(ADD_USER, addUser);
}
