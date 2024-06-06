import React, { Suspense, lazy, useEffect, useState } from 'react';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { Route } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../FirebaseUtils/firebaseutils';
import { useDispatch } from 'react-redux';
import { updateCollection } from '../../redux/collection/collection.action';
import { collection, onSnapshot } from 'firebase/firestore';
const CollectionOverview = lazy(
	() => import('../../components/collections-overview/collections.overview')
);
const CategoryPage = lazy(() => import('../category/category.component'));

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CategoryPageWithSpinner = WithSpinner(CategoryPage);

const Shop = ({ match }: any) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState({ loading: true });

	useEffect(() => {
		let unsubscribeFromSnapshot: any = null;
		const collectionRef = collection(firestore, 'collections');
		unsubscribeFromSnapshot = onSnapshot(
			collectionRef,
			async (snapshot: any) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(updateCollection(collectionsMap));
				setIsLoading({ loading: false });
			}
		);
		return () => {
			unsubscribeFromSnapshot();
		};
	}, []);

	return (
		<div className="shop-page">
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					render={(props: any) => (
						<CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:categoryId`}
					render={(props: any) => (
						<CategoryPageWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
			</Suspense>
		</div>
	);
};

export default Shop;
