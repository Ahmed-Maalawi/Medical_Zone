import {createAction, props} from "@ngrx/store";

//--------------  Login Actions  ---------------
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ credentials: { email: string; password: string;}}>()
)


export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ loginSuccessResponse: any}>()
)

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any}>()
)


//--------------  Register Actions  ---------------
export const RegisterRequest = createAction(
  '[Auth] Register Request',
  props<{ credentials: {
    name: string;
    email: string;
    password: string
    password_confirmation: string;

  }}>()
)


export const RegisterSuccess = createAction(
  '[Auth] Register Success',
  props<{ RegisterSuccessResponse: any}>()
)

export const RegisterFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any}>()
)
