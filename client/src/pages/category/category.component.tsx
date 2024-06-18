import React from 'react';
import './category.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/collection/collection.selectors';

const CategoryPage = ({ match }: any) => {
	const title = match.params.categoryId;

	const { items } = useSelector((state: any) => selectCollection(title)(state));


	return (
		<div className="category">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item: any) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
