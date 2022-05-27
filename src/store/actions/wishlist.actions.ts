import {createAction, props} from "@ngrx/store";
import {Product} from "../../app/models/product.model";
import {HttpErrorResponse} from "@angular/common/http";

export const wishliAddItem = createAction(
  '[wishlist Page] Add Item',
  props<{ item: Product }>()
);

export const wishliDeleteItem = createAction(
  '[wishlist Page] Delete Item',
  props<{ id: number }>()
);

export const getWishlist = createAction('[wishlist] Get Items')

export const getWishlistSuccess = createAction(
  '[wishlist Page] Get Success wishlist',
  props<{ wishlist_item: Array<Product>}>()
)


export const getWishlistFailure = createAction(
  '[wishlist Page] Get Failure wishlist',
  props<{ error: HttpErrorResponse }>()
)

