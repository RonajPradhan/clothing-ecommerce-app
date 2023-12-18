import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './previous.collection.styles.scss';
import { Item } from '../../constants';
import { Link } from 'react-router-dom';

interface Props {
	title: string;
	items: Item[];
}

const CollectionPreview = ({ title, items }: Props) => {
	return (
		<div className="collection-preview">
			<div className='link-container'>
				<Link to={`/shop/${title.toLowerCase()}`} className="title">
					{title.toUpperCase()}
				</Link>
			</div>
			<div className="preview">
				{items
					.filter((item: any, index: number) => index < 4)
					.map((item: any) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
