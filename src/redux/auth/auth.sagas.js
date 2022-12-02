import { takeLatest, put, all, call } from 'redux-saga/effects';

import ApiCollections from '../../configs/services/apiCollections'

import AuthActionTypes from './auth.types';
import * as AuthActions from './auth.actions';

/*************************************************/

export function* signIn({ payload }) {
  yield put(AuthActions.loadingStart());
  try {
    const response = yield call(ApiCollections.login, payload);
    yield put(AuthActions.signInSuccess(response.data.token));
    localStorage.setItem('token', response.data.token);
    yield put(AuthActions.loadingStop());
  } catch (error) {
    yield put(AuthActions.signInFailure(error));
    yield put(AuthActions.loadingStop());
  }
}

/*************************************************/

export function* signOut() {
  try {
    localStorage.clear();
    yield put(AuthActions.signOutSuccess());
  } catch (error) {
    yield put(AuthActions.signOutFailure("SignOut Failed"));
  }
}

/*************************************************/

export function* authSagas() {
  yield all([
    yield takeLatest(AuthActionTypes.SIGN_IN_REQUEST, signIn),
    yield takeLatest(AuthActionTypes.SIGN_OUT_REQUEST, signOut),
  ]);
}

/*************************************************/