import { Action } from '../types';

export enum UserActionTypes  {
    SIGN_IN = 'user/SIGN_IN',
    SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE',

    SIGN_UP = 'user/SIGN_UP',
    SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE',

    SIGN_OUT = 'user/SIGN_OUT',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE = 'user/SIGN_OUT_FAILURE',
}

export type SignInAction = Action<UserActionTypes.SIGN_IN, {
    email: string,
    password: string
}>
export type SignInSuccessAction = Action<UserActionTypes.SIGN_IN_SUCCESS, {
    userInfo: any
}>
export type SignInFailureAction = Action<UserActionTypes.SIGN_IN_FAILURE, {
    error: any
}>;

export type SignUpAction = Action<UserActionTypes.SIGN_UP, {
    email: string,
    password: string
}>
export type SignUpSuccessAction = Action<UserActionTypes.SIGN_UP_SUCCESS, {
    userInfo: any
}>
export type SignUpFailureAction = Action<UserActionTypes.SIGN_UP_FAILURE,  {
    error: any
}>;

export type SignOutAction = Action<UserActionTypes.SIGN_OUT>;
export type SignOutSuccessAction = Action<UserActionTypes.SIGN_OUT_SUCCESS>;
export type SignOutFailureAction = Action<UserActionTypes.SIGN_OUT_FAILURE>;

export type UserAction =
    | SignInAction
    | SignInSuccessAction
    | SignInFailureAction

    | SignUpAction
    | SignUpSuccessAction
    | SignUpFailureAction

    | SignOutAction
    | SignOutSuccessAction
    | SignOutFailureAction



