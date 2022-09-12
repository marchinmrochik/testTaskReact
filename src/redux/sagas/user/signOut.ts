import {call, put} from "redux-saga/effects";
import {firebaseSignOut} from "../../../firebase/firebase";
import {userSignOutFailure, userSignOutSuccess} from "../../actions/userActions";

export default function* signOutSaga(): any {
    try {
        yield call(() => firebaseSignOut());
        yield put(userSignOutSuccess())
    } catch (error) {
        yield put(userSignOutFailure());
    }
}
