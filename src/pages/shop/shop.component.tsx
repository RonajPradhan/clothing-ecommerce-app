import React from 'react';
import CollectionPreview from '../../components/preview-collection/previous.collection.component';
import { SHOP_DATA } from '../../constants';
import './shop.styles.scss';

function Shop() {
	return (
		<div>
			<p className="collection-title">Collections</p>
			{SHOP_DATA.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</div>
	);
}

export default Shop;
