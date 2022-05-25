import {Injectable} from "@angular/core";
import {createEffect, ofType, Actions} from "@ngrx/effects";
import * as AuthActions from './../actions/auth.actions';
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {AuthService} from "../../app/services/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";



@Injectable()
export class AuthEffects {
  constructor(
    private _AuthService:AuthService,
    private actions$: Actions,
    private _Router:Router,
    private _CookieService:CookieService
  ) {}

  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) =>
      this._AuthService
        .Login(action.credentials)
        .pipe(
          map((loginSuccessResponse) =>
            AuthActions.loginSuccess({loginSuccessResponse})
          ),
          catchError((error) => of(AuthActions.loginFailure({error})))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ loginSuccessResponse }) => {
        this._Router.navigateByUrl('/');
        window.alert('Login successfully ' + 'Welcome ' + loginSuccessResponse.user.name);
        this._CookieService.set('user_info', loginSuccessResponse.user);
        this._CookieService.set('user_token', loginSuccessResponse.access_token);
      })
    ),
    { dispatch: false }
  );

}
