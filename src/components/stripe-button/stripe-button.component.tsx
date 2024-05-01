import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeButton = ({ price }: any) => {
	const priceForStripe = price * 100;
	const publishableKey = `${process.env.REACT_APP_STRIPE_KEY}`;

	const onToken = (token: any) => {
		console.log('here');
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/iCUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
			ComponentClass="button"
		/>
	);
};

export default StripeButton;
