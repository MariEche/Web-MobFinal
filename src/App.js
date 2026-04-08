// App.js

import React, { useState , useEffect} from 'react';
import Navbar from './public/src/Navbar';
import Filtering from './Filtering';
import Products from './product_cards';
import Modal from './components/modal';
import { list_products } from './public/src/data';

export default function App() {
    const [products, setProducts] = useState(list_products);
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [priceFilter, setPriceFilter] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const addToCart = (product) => {
        if (product.stock <= 0) return;

        setCart(prev => [...prev, product]);
        setTotalItems(prev => prev + 1);
        setTotalPrice(prev => prev + product.price);

        setProducts(products.map(p => 
            p.id === product.id ? { ...p, stock: p.stock - 1 } : p));
    };

    const filteredProducts = products
    .filter(p => categoryFilter === "All" || p.category === categoryFilter)
    .sort((a, b) => {
        if (priceFilter === "low") return a.price - b.price;
        if (priceFilter === "high") return b.price - a.price;
        return 0;
    });

    return (
        <div>
            <Navbar itemsInCart={totalItems} calculateTotal={() => totalPrice} />
            <Filtering byCategories={setCategoryFilter} byPrice={setPriceFilter} />
        

        <div className="product_list">
            {filteredProducts.map(product => (
                <Products key={product.id} product={product} addToCart={addToCart} openModal={setSelectedProduct} />
            ))}
        </div>

        {selectedProduct && (<Modal product={selectedProduct} closeModal={() => setSelectedProduct(null)} />
        )}
    </div>
);
}       
