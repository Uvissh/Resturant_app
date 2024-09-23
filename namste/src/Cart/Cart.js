import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice'; // Import clearCart action correctly
import CartStore from '../CartStore/CartStore';
import "./Cart.css";

const Cart = () => {
    // Access the cart items from the Redux store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    // Get the dispatch function from Redux
    const dispatch = useDispatch();

    // Function to handle clearing the cart
    const handlecart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <div className='foodItems'>
                {/* Display the number of cart items */}
                <h1 className='cartItems'>Cart Items - {cartItems.length}</h1>
                {/* Button to clear the cart */}
                <button className='clear' onClick={handlecart}>Clear</button>
                {/* Render the cart items */}
                <div className='CartFood'>
                    {
                        cartItems && cartItems.map((item) => (
                            // Pass the properties of each cart item to the CartStore component
                            <CartStore item =  {item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;
