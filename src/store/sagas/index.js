import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { logoutSaga, authClearStorageSaga } from "./auth";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_LOGOUT_SUCCEED, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CLEAR_STORAGE_SUCCEED, authClearStorageSaga);
}
