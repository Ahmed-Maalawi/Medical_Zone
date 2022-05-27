import {User} from "../../app/models/user.model";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {loginFailure, loginSuccess, RegisterFailure, RegisterSuccess} from "../actions/auth.actions";

export interface State {
  access_token: string | null,
  user: User | null,
  loginError?: any,
  isLoggedInProgress?: boolean,
}

export const initialState: State = {
  access_token: null,
  user: null,
}

const _authReducer = createReducer(
  initialState,
  //------------------  Login Reducers -------------
  on(loginSuccess, (state, {loginSuccessResponse}) => {
    return {
      ...state,
      access_token: loginSuccessResponse.access_token,
      user: loginSuccessResponse.user
    };
  }),

  on(loginFailure, (state, {error}) => {
    return {
      ...state,
      loginError: error,
      access_token: null,
      user: null
    };
  }),

  //------------------  Register Reducers -------------
  on(RegisterSuccess, (state, { RegisterSuccessResponse }) => {
    return {
      ...state,
      loginError: null,
      access_token: RegisterSuccessResponse.access_token,
      user: RegisterSuccessResponse.user,
    };
  }),

  on(RegisterFailure, (state, { error }) => {
    return {
      ...state,
      loginError: error,
      access_token: null,
      user: null,
    };
  }),

);


export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

//-------------- create Login selectors ------------------------------

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.access_token
);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);
