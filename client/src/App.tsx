import React, { useEffect, lazy, Suspense, useState } from 'react';
import '@stripe/stripe-js';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { Redirect, Switch, Route } from 'react-router-dom';
import Header from './components/header-component/header.component';
import {
	auth,
	convertDirectorySnapshotToMap,
	createUserProfileDocument,
	firestore,
} from './FirebaseUtils/firebaseutils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Spinner from './components/spinner/spinner.component';
import FallBack from './components/error-boundary/error-boundary.component';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from './components/with-spinner/with-spinner';
import { setCurrentHomePageDirectory } from './redux/directory/directory.action';

const HomePage = lazy(() => import('./pages/Homepage/HomePage.component'));
const HomePageWithSpinner = WithSpinner(HomePage);

const Shop = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(
	() => import('./pages/SignIn-and-SignUp/SignIn.SignUp.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const Contact = lazy(() => import('./pages/contact/contact.component'));

function App() {
	const [isLoading, setIsLoading] = useState({ loading: true });
	const dispatch = useDispatch();

	const currentUser = useSelector((state: any) => selectCurrentUser(state));

	useEffect(() => {
		let unsubscribeFromAuth: any = null;
		unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				if (userRef) {
					onSnapshot(userRef, (snapShot: any) => {
						dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
					});
				}
			} else {
				dispatch(setCurrentUser(userAuth));
			}
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, [dispatch]);

	useEffect(() => {
		let unsubscribeFromSnapshot: any = null;
		const directoryRef = collection(firestore, 'homePage');
		unsubscribeFromSnapshot = onSnapshot(
			directoryRef,
			async (snapshot: any) => {
				const transformedDirectory = convertDirectorySnapshotToMap(snapshot);
				dispatch(setCurrentHomePageDirectory(transformedDirectory));
				setIsLoading({ loading: false });
			}
		);
		return () => {
			unsubscribeFromSnapshot();
		};
	}, [dispatch]);

	return (
		<>
			<Header />
			<Switch>
				<ErrorBoundary FallbackComponent={FallBack}>
					<Suspense fallback={<Spinner />}>
						<Route
							exact
							path="/"
							render={(props: any) => (
								<HomePageWithSpinner isLoading={isLoading} {...props} />
							)}
						/>
						<Route path="/shop" component={Shop} />
						<Route
							exact
							path="/signIn"
							render={() =>
								currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
							}
						/>
						<Route path="/checkout" component={CheckoutPage} />
						<Route path="/contact" component={Contact} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</>
	);
}

export default App;
