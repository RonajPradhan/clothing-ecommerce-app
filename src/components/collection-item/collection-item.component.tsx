import React from 'react';
import './collection-item.styles.scss';
import { Item } from '../../constants';
import CustomButton from '../custom-button/custom.button.component';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/cart/cart.action';

interface Props {
	item: Item;
}

const CollectionItem = ({ item }: Props) => {


	const dispatch = useDispatch();

	return (
		<div className="collection-item">
			<div
				className="image-container"
				style={{ backgroundImage: `url(${item.imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{item.name}</span>
				<span className="price">${item.price}</span>
			</div>
			<CustomButton inverted onClick={() => dispatch(addItems(item))}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
