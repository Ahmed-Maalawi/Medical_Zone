import {Injectable} from "@angular/core";
import {createEffect, ofType, Actions} from "@ngrx/effects";
import * as AuthActions from './../actions/auth.actions';
import {catchError, exhaustMap, map, of} from "rxjs";
import {AuthService} from "../../app/services/auth.service";


@Injectable()
export class AuthEffects {
  constructor(private _AuthService:AuthService,  private actions$: Actions,) {}

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
        ))

    )
  );


  // RegisterRequest$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions)
  //   )
  // )
}
