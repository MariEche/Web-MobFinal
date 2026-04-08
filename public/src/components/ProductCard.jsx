// product_cards.js

import React from 'react';

export default function Products({product,addToCart, openModal}) {

    return (
        <div className="product_display">
            <h2 className="product_name">{product.name}</h2>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>

            <button onClick={() => openModal(product)}>View Details</button>

            <button onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className="add_to_cart_button">
                
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
        </div>
    );
}