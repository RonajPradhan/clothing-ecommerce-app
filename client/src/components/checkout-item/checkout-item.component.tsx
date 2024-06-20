import React from 'react'
import './checkout-item.styles.scss'
import { useDispatch } from 'react-redux'
import { clearItem, addItems, removeItemsFromCart } from '../../redux/cart/cart.action'
import { showToast } from '../../utils/showToast'


const CheckoutItem = ({cartItem}:any) => {

    const {imageUrl,name,quantity,price} = cartItem

    const dispatch = useDispatch();

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl}alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => dispatch(removeItemsFromCart(cartItem))} className="arrow-left">
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div onClick={() => dispatch(addItems(cartItem))} className="arrow-right">
                    &#10095;
                </div>
                </span>
            <span className="price">{price}</span>
            <div onClick={() => {
                dispatch(clearItem(cartItem.id))
                showToast(`🗑️${name} removed from the cart!`, 'success');
            }} className="remove-button">
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem
