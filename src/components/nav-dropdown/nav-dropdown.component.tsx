import React from 'react';
import './nav-dropdown.styles.scss';
import { Link } from 'react-router-dom';

const NavDropDown = () => {
	return (
		<div className="drop-container">
			<Link to="/shop">shop</Link>

			<Link to="/contact">contact</Link>

			<Link to="/signin">signin</Link>
		</div>
	);
};

export default NavDropDown;
