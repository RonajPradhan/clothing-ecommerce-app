import { CartActionTypes } from './cart.types';

export const toggleCartDropdown = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItems = (item:any) => ({
	type:CartActionTypes.ADD_ITEM,
	payload : item
})

export const clearItem = (id:any) => ({
	type:CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload : id
})

export const removeItemsFromCart = (item:any) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload:item
})
