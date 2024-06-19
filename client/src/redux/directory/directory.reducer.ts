import { directoryActionTypes } from './directory.types';

// const INITIAL_STATE = {
// 	sections: [
// 		{
// 			id: 1,
// 			title: 'hats',
// 			imageUrl:
// 				'https://i.ibb.co/bHdwm7F/kilyan-sockalingum-q-U9u-Fpbf-XUo-unsplash-1.jpg',
// 			linkUrl: 'hats',
// 		},
// 		{
// 			id: 2,
// 			title: 'jackets',
// 			imageUrl:
// 				'https://i.ibb.co/px2tCc3/jackets.png',
// 			linkUrl: 'jackets',
// 		},
// 		{
// 			id: 3,
// 			title: 'sneakers',
// 			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
// 			linkUrl: 'sneakers',
// 		},
// 		{
// 			id: 4,
// 			title: 'womens',
// 			imageUrl:
// 				'https://i.ibb.co/QpwvS9p/jenna-anderson-gd-Jl-2-Jl-Trc-unsplash-1.jpg',
// 			linkUrl: 'womens',
// 			size: 'large',
// 		},
// 		{
// 			id: 5,
// 			title: 'mens',
// 			imageUrl:
// 				'https://i.ibb.co/ftq2p4r/andrew-neel-Hqt-Ywl-Y9dxs-unsplash-1.jpg',
// 			linkUrl: 'mens',
// 			size: 'large',
// 		},
// 	],
// };

const INITIAL_STATE = {
	directory: null,
};

const directoryReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case directoryActionTypes.IMPORT_HOMEPAGE_DIRECTORY:
			return {
				...state,
				directory: action.payload,
			};
		default:
			return state;
	}
};

export default directoryReducer;
