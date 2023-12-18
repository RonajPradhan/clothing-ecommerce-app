import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../FirebaseUtils/firebaseutils';
import './header.styles.scss';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import NavDropDown from '../nav-dropdown/nav-dropdown.component';
import menu from '../../assets/menu.png';
import MenuIcon from '../menu-icon/menu-icon.component';

const Header = () => {
	const [isTrue, setIsTrue] = useState(false);

	const [isDesktop, setDesktop] = useState(window.innerWidth > 500);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 500);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	const { currentUser, hidden } = useSelector(
		createStructuredSelector({
			currentUser: selectCurrentUser,
			hidden: selectCartHidden,
		})
	);

	const toggleFunction = () => {
		setIsTrue(!isTrue);
	};

	return (
		<>
			<div className="header-container">
				<Link className="logo-container" to="/">
					<Logo className="logo" />
				</Link>
				<div className="options">
					{isDesktop ? (
						<>
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
						</>
					) : (
						<MenuIcon toggleDropdown={toggleFunction} />
					)}

					<CartIcon />
				</div>
				{!hidden && <CartDropdown />}
			</div>

			{isTrue && <NavDropDown />}
		</>
	);
};

export default Header;
