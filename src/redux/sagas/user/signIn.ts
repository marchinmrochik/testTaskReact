import {call, put} from "redux-saga/effects";
import {firebaseAuth} from "../../../firebase/firebase";
import {userSignInFailure, userSignInSuccess} from "../../actions/userActions";
import {SignInAction} from "../../actionTypes/userActionTypes";

export default function* signInSaga({payload}:SignInAction): any {
    try {
        const response = yield call(() => firebaseAuth(payload!.email, payload!.password));
        yield put(userSignInSuccess(response))
    } catch (error) {
        yield put(userSignInFailure(error));
    }
}
