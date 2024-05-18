import { createSelector } from 'reselect';

const selectShop = (state: { shop: any }) => state.shop;

export const selectCollectionData = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollectionData],
	(collections) =>
		collections
			? Object.keys(collections).map((key: any) => collections[key])
			: []
);

export const selectCollection = (collectionUrlParam: any) =>
	createSelector([selectCollectionData], (collections) =>
		collections ? collections[collectionUrlParam] : null
	);
