 export const addItemToCart = (cartItems:any, cartItemToAdd:any) => {

    const existingCartItem = cartItems.find((cartItem: { id: any; }) => cartItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem: { id: any; quantity: number; }) => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
} 

export const clearItemsFromCart = (cartItem:any, id:any) => {
    
    const filteredItem = cartItem.filter((item:any) => item.id !== id)

    return filteredItem;
}

export const removeItemsFromCart = (cartItem:any, cartItemToRemove:any) => {

    const existingCartItem = cartItem.find((cartItem: { id: any; }) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItem.filter((cartItem: { id: any; quantity: number; }) => 
            cartItem.id !== cartItemToRemove.id )
    }

    return cartItem.map((cartItem: { id: any; quantity: number; }) => 
    cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem )
}
    