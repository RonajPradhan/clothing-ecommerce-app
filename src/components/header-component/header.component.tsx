import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../FirebaseUtils/firebaseutils';
import './header.styles.scss';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = () => {
	const { currentUser } = useSelector((state: any) => state.user);
	const { hidden } = useSelector((state: any) => state.cart);
	return (
		<div className="header-container">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGNOUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SignIn
					</Link>
				)}
				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
};

export default Header;
