import {call, put} from "redux-saga/effects";
import {firebaseCreateUser} from "../../../firebase/firebase";
import {
    userSignUpFailure,
    userSignUpSuccess
} from "../../actions/userActions";
import {SignUpAction} from "../../actionTypes/userActionTypes";

export default function* signUpSaga({payload}: SignUpAction): any {
    try {
        const response = yield call(() => firebaseCreateUser(payload!.email, payload!.password));
        yield put(userSignUpSuccess(response))
    } catch (error) {
        yield put(userSignUpFailure(error));
    }
}