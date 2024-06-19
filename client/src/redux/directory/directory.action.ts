import { directoryActionTypes } from './directory.types';

export const setCurrentHomePageDirectory = (directory: any) => ({
	type: directoryActionTypes.IMPORT_HOMEPAGE_DIRECTORY,
	payload: directory,
});
