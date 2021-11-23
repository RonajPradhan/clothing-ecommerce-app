import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.action';

const CartIcon = () => {
	const dispatch = useDispatch();
	return (
		<div className="cart-icon" onClick={() => dispatch(toggleCartDropdown())}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
