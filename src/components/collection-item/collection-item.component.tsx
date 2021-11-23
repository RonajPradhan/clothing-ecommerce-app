import React from 'react';
import './collection-item.styles.scss';
import { Item } from '../../constants';

const CollectionItem = ({ id, imageUrl, name, price }: Item) => {
	return (
		<div className="collection-item" key={id}>
			<div
				className="image-container"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
