import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './previous.collection.styles.scss';
import { Item } from '../../constants';


interface Props {
	title: string;
	items: Item[];
}

const CollectionPreview = ({ title, items }: Props) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
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
