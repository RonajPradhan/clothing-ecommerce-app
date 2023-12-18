import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'

const StripeButton = ({ price }: any) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9nQMGpMGmypjNglmF0WDGxaQRdaGAjHum9RN49pq2isDdRYQKccjFWxaLjGGs9dbd0ApHfAT52PNIcL5zpkuzt00lfmiTzBF'

    const onToken = (token: any) => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/iCUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            ComponentClass='button'
        />
        

    )
}

export default StripeButton
