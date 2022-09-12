import { UserAction, UserActionTypes} from "../actionTypes/userActionTypes";

interface LoginState {
  loading: boolean,
  error: any,
  userInfo: any | null,
  isAuthenticated: boolean
}

const initialState: LoginState = {
  userInfo: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.SIGN_IN:
      return {
        ...state,
        loading: true,
        userInfo: null,
        isAuthenticated: false
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    case UserActionTypes.SIGN_UP:
      return {
        ...state,
        loading: true,
        userInfo: null,
        isAuthenticated: false
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userInfo: action.payload
      };
    case UserActionTypes.SIGN_UP_FAILURE :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.SIGN_OUT_SUCCESS :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        userInfo: null
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    default:
      return state;
  }
}