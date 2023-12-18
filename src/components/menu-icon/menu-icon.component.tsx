import React from 'react';
import './menu-icon.styles.scss';
import menuIcon from '../../assets/menu.png';

const MenuIcon = ({ toggleDropdown }: any) => {
	return (
		<div className="icon" onClick={() => toggleDropdown()}>
			<img src={menuIcon} alt="" />
		</div>
	);
};

export default MenuIcon;
