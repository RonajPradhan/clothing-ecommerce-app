import React from 'react';
import CustomButton from '../custom-button/custom.button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.action';

const CartDropdown = () => {
	const  cartItems = useSelector((state: any) => selectCartItems(state));

	console.log(cartItems)

	const dispatch = useDispatch();

	const history = useHistory();

	return (
		<div className="cart-dropdown">
			<div className="cart-items">{
				cartItems?.length ?
				cartItems?.map((item :any) => (<CartItem key={item.id} item={item}/>)		
				) : <span className='empty-message'>Your cart is empty</span>
			}</div>
			<CustomButton onClick={() => {
				 history.push('/checkout');
				 dispatch(toggleCartDropdown());
			}}>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
