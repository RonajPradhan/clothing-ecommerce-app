import React, { useEffect, lazy, Suspense } from 'react';
import '@stripe/stripe-js';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { Redirect, Switch, Route } from 'react-router-dom';
import Header from './components/header-component/header.component';
import { auth, createUserProfileDocument } from './FirebaseUtils/firebaseutils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Spinner from './components/spinner/spinner.component';
import FallBack from './components/error-boundary/error-boundary.component';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';

const HomePage = lazy(() => import('./pages/Homepage/HomePage.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(
	() => import('./pages/SignIn-and-SignUp/SignIn.SignUp.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const Contact = lazy(() => import('./pages/contact/contact.component'));

function App() {
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

	return (
		<>
			<Header />
			<Switch>
				<ErrorBoundary FallbackComponent={FallBack}>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={HomePage} />
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
