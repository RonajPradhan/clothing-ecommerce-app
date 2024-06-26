import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
	doc,
	getDoc,
	getFirestore,
	setDoc,
	
} from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

let firebaseConfig = {
	apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
	authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
	projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
	storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
	messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
	appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
	measurementId: `${process.env.REACT_APP_FIREBASE_MESUREMENT_ID}`,
};

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();

export const convertDirectorySnapshotToMap = (directory: any) => {
	const transformedDirectory = directory.docs.map((doc: any) => {
		const { id, imageUrl, linkUrl, size, title } = doc.data();
		return {
			id,
			imageUrl,
			linkUrl,
			size,
			title,
		};
	});
	return transformedDirectory;
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
	const transformedCollection = collections.docs.map((doc: any) => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title).toLowerCase(),
			id: doc.id,
			title,
			items,
		};
	});
	return transformedCollection.reduce(
		(accumulator: { [x: string]: any }, collection: { title: string }) => {
			accumulator[collection.title.toLowerCase()] = collection;
			return accumulator;
		},
		{}
	);
};

export const createUserProfileDocument = async (
	userAuth: any,
	additionalData?: any
) => {
	if (!userAuth) return;

	const userRef = doc(firestore, `users/${userAuth.uid}`);

	const snapShot = await getDoc(userRef);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error: any) {
			console.log(`error message`, error.message);
		}
	}
	return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
	signInWithPopup(auth, provider)
		.then((result: any) => {
			console.log('Logged In', result);
		})
		.catch((error: any) => {
			console.log('Caught error popup closed!');
		});

export default firebase;
