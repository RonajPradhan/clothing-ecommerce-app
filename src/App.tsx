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
import Success from './pages/success-cancel/Success';
import Cancel from './pages/success-cancel/Cancel';
import Spinner from './components/spinner/spinner.component';
import FallBack from './components/error-boundary/error-boundary.component';

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
		unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef?.onSnapshot((snapShot) => {
					dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
				});
			}

			dispatch(setCurrentUser(userAuth));
		});
		return () => {
			unsubscribeFromAuth();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
						{/* <Route path="/success" component={Success} />
					<Route path="/cancel" component={Cancel} /> */}
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</>
	);
}

export default App;
