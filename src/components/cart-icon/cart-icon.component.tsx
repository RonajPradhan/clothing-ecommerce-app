import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useDispatch,useSelector} from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () => {
	const dispatch = useDispatch();

	const count = useSelector((state:any) =>
    selectCartItemsCount(state)
  )

	return (
		<div className="cart-icon" onClick={() => dispatch(toggleCartDropdown())}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{count}</span>
		</div>
	);
};

export default CartIcon;
