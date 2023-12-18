import React from 'react';
import './nav-dropdown.styles.scss';
import { Link } from 'react-router-dom';

const NavDropDown = () => {
	return (
		<div className="drop-container">
			<div className="pages">
				<Link to="/shop">shop</Link>
			</div>
			<div className="pages">
				<Link to="/shop">contact</Link>
			</div>
			<div className="pages">
				<Link to="/shop">signin</Link>
			</div>
		</div>
	);
};

export default NavDropDown;
