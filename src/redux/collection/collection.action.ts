import ShopActionTypes from './collection.types';

export const updateCollection = (collectionMap: any) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionMap,
});