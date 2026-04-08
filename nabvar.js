import React from 'react';

export default function Navbar({itemsInCart,calculateTotal}) {
    return (
        <div className="navbar">
            <h1>Clothing Store</h1>
            <div className="cart_info">
                <p>Items in Cart: {itemsInCart}</p>
                <p>Total: ${calculateTotal()}</p>
            </div>
        </div>
    );
}