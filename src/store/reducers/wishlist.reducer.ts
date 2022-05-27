import {Product} from "../../app/models/product.model";
import * as wishlistPageActions from './../actions/wishlist.actions';
import {createReducer, on} from "@ngrx/store";

export interface wishlistState {
  wishlist: Array<Product> | null,
  isLoading: boolean;
}

export const initialState: wishlistState = {
  wishlist: null,
  isLoading: false,
}


// @ts-ignore
export const wishlistReducer = createReducer(initialState, on(wishlistPageActions.wishliAddItem, (state, { item }) => {
  return {
    ...state,
    wishlist: state?.wishlist?.push(item),
  }
}),

  // on(wishlistPageActions.wishliDeleteItem, (state, { id }) => {
  // return{
  //   ...state,
  //   wishlist: state.
  // }
  // })
);
