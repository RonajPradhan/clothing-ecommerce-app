import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
	apiKey: 'AIzaSyDMQztvAFB42G1iBe56c8n8GL5xE4TzHHI',
	authDomain: 'clothing-store-authentication.firebaseapp.com',
	projectId: 'clothing-store-authentication',
	storageBucket: 'clothing-store-authentication.appspot.com',
	messagingSenderId: '496687631319',
	appId: '1:496687631319:web:bdf567d416ff2e6d671992',
	measurementId: 'G-545C7WWPLB',
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (
	userAuth: any,
	additionalData?: any
) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
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

export const auth: firebase.auth.Auth = firebase.auth();
export const firestore: firebase.firestore.Firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
