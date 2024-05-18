import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';
import axios from 'axios';

const StripeButton = ({ price }: any) => {
	const priceForStripe = price * 100;
	const publishableKey = `${process.env.REACT_APP_STRIPE_KEY}`;

	const onToken = (token: any) => {
		axios({
			url: 'payment',
			method: 'POST',
			data: {
				amount: priceForStripe,
				token: token,
			},
		})
			.then((response) => {
				alert('Payment successful');
			})
			.catch((error) => {
				console.log(error, JSON.parse(error));
				alert(
					`There was an issue with your payment. Please make sure you are using correct credentials.`
				);
			});
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
