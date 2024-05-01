import React from 'react';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
// import { Stripe, loadStripe } from '@stripe/stripe-js';

// let stripePromise: Promise<Stripe | null>;

// const getStripe = () => {
// 	if (!stripePromise) {
// 		stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
// 	}

// 	return stripePromise;
// };

const CheckoutPage = () => {
	const { cartItems, total } = useSelector(
		createStructuredSelector({
			cartItems: selectCartItems,
			total: selectCartTotal,
		})
	);

	// const checkoutOptions = {
	// 	lineItems: [item],
	// 	mode: 'payment',
	// 	successUrl: `${window.location.origin}/success`,
	// 	cancelUrl: `${window.location.origin}/cancel`,
	// } as any;

	// const redirectToCheckout = async () => {
	// 	const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
	// 	const body = {
	// 		products: cartItems,
	// 	};
	// 	const headers = {
	// 		'Content-Type': 'application/json'

	// 	}

	// 	const session = await stripe?.initCustomCheckout()

	// };

	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item: any) => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}
			<div className="total">TOTAL: ${total}</div>
			<div className="test-warning">
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/30 - CVV:123
			</div>
			<StripeButton class="StripeCheckout" price={total} />
			{/* <button onClick={redirectToCheckout}>Pay now</button> */}
		</div>
	);
};

export default CheckoutPage;
