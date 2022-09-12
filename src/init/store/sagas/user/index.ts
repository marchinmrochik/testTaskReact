import {all, takeLatest} from "redux-saga/effects";
import signInSaga from "./signIn";
import {UserActionTypes} from "../../actionTypes/userActionTypes";
import signUpSaga from "./signUp";
import signOutSaga from "./signOut";

export default function* userSaga() {
    yield all([
            takeLatest(UserActionTypes.SIGN_IN, signInSaga),
            takeLatest(UserActionTypes.SIGN_UP, signUpSaga),
            takeLatest(UserActionTypes.SIGN_OUT, signOutSaga)
        ]
    )
}