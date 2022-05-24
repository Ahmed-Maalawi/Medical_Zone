import {User} from "../../app/models/user.model";
import { createReducer, on} from "@ngrx/store";
import {loginFailure, loginSuccess, RegisterFailure, RegisterRequest, RegisterSuccess} from "../actions/auth.actions";

export interface State {
  token: string | null,
  user: User | null,
  loginError?: any,
  isLoggedInProgress?: boolean,
}

export const initialState: State = {
  token: null,
  user: null,
}

const _authReducer = createReducer(
  initialState,
  //------------------  Login Reducers -------------
  on(loginSuccess, (state, {loginSuccessResponse}) => {
    return {
      ...state,
      token: loginSuccessResponse.accessToken,
      user: loginSuccessResponse.user
    };
  }),

  on(loginFailure, (state, {error}) => {
    return {
      ...state,
      loginError: error,
      token: null,
      user: null
    };
  }),

  //------------------  Register Reducers -------------
  on(RegisterSuccess, (state, { RegisterSuccessResponse }) => {
    return {
      ...state,
      loginError: null,
      token: RegisterSuccessResponse.accessToken,
      user: RegisterSuccessResponse.user,
    };
  }),

  on(RegisterFailure, (state, { error }) => {
    return {
      ...state,
      loginError: error,
      token: null,
      user: null,
    };
  }),

);


export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
