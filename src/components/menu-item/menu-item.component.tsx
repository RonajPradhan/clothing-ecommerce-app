import { withRouter } from 'react-router-dom';
import React from 'react';
import './menu-item.styles.scss';
import { section } from '../../constants';

const MenuItem = ({ imageUrl, title, match, history, size, linkUrl }: any) => {
	return (
		<>
			<div
				className={`${size} menu-item`}
				onClick={() => history.push(`${match.url}${linkUrl}`)}
			>
				<div
					style={{ backgroundImage: `url(${imageUrl})` }}
					className="background-image"
				/>
				<div className="content">
					<div className="title">{title.toUpperCase()}</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
		</>
	);
};

export default withRouter(MenuItem);
