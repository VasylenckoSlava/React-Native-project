import App from "../../../App";
import { AsyncStorage } from "react-native";
import * as actions from "../actions/index";
import { put, call } from "redux-saga/effects";

export function* logoutSaga() {
  yield authClearStorageSaga();
  yield call(App);
  yield put(actions.authRemoveToken());
}

export function* authClearStorageSaga() {
    yield AsyncStorage.multiRemove([
        "ap:auth:token",
        "ap:auth:expiryDate",
        "ap:auth:refreshToken"
    ]);
}
