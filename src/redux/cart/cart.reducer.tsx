import { CartActionTypes } from './cart.types';
import { addItemToCart, clearItemsFromCart, removeItemsFromCart } from './cart.utlis';

const INITIAL_STATE = {
	hidden: true,
	cartItem: []
};

const cartReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return{
				...state,
				cartItem: addItemToCart(state.cartItem, action.payload)
			}
		case CartActionTypes.CLEAR_ITEM_FROM_CART: 
		return {
			...state,
			cartItem: clearItemsFromCart(state.cartItem, action.payload)
		}
		case CartActionTypes.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItem: removeItemsFromCart(state.cartItem,action.payload)
			}
		default:
			return state;
	}
};

export default cartReducer;
