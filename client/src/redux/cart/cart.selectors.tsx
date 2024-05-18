import {createSelector} from 'reselect';

const selectCart = (state: { cart: any; }) => state.cart;

export const selectCartHidden = createSelector([selectCart],
    (cart) => cart.hidden)

export const selectCartItems = createSelector([selectCart],
    (cart) => cart.cartItem)

export const selectCartItemsCount = createSelector([selectCartItems],
    (cartItem) => cartItem.reduce((accumulatedQuantity:any, item:any) => accumulatedQuantity + item.quantity,0))

export const selectCartTotal = createSelector([selectCartItems],
    (cartItem) => cartItem.reduce((accumulatedQuantity:any, item:any) => accumulatedQuantity + item.quantity * item.price,0))