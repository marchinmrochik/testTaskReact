import {
    SignInAction,
    SignInFailureAction,
    SignInSuccessAction, SignOutAction, SignOutFailureAction, SignOutSuccessAction,
    SignUpAction, SignUpFailureAction,
    SignUpSuccessAction,
    UserActionTypes
} from "../actionTypes/userActionTypes";

export const userSignIn = (data: { email:string, password:string }): SignInAction => ({
    type: UserActionTypes.SIGN_IN,
    payload: data,
});
export const userSignInSuccess = (userInfo: any): SignInSuccessAction => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: userInfo
});
export const userSignInFailure = (error: any): SignInFailureAction => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const userSignUp = (data: {email:string, password:string}): SignUpAction => ({
    type: UserActionTypes.SIGN_UP,
    payload: data,
});

export const userSignUpSuccess = (userInfo: any): SignUpSuccessAction => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: userInfo
});

export const userSignUpFailure = (error: any): SignUpFailureAction => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const userSignOut = (): SignOutAction => ({
    type: UserActionTypes.SIGN_OUT
});
export const userSignOutSuccess = (): SignOutSuccessAction => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS

});
export const userSignOutFailure = (): SignOutFailureAction => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
});