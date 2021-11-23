import React from 'react';
import './Homepage.component.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import { section } from '../../constants';

const HomePage = () => {
	return (
		<div className="homepage">
			<div className="directory-menu">
				{section.map(({ id, ...sectionProp }) => (
					<MenuItem key={id} {...sectionProp} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
