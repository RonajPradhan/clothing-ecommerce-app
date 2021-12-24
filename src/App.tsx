import React, { useEffect } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
} from 'react-router-dom';
import Header from './components/header-component/header.component';
import HomePage from './pages/Homepage/HomePage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/SignIn-and-SignUp/SignIn.SignUp.component';
import { auth, createUserProfileDocument } from './FirebaseUtils/firebaseutils';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser} from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

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
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={Shop} />
				<Route
					exact
					path="/signIn"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
					}
				/>
				<Route path = '/checkout' component={CheckoutPage}/>
			</Switch>
		</>
	);
}

export default App;
