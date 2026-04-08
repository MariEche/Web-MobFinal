// filtering.js

import React from 'react';

export default function Filtering({byCategories, byPrice}) {
    return (
        <div className = "filtering">
            <select onChange={(e) => byCategories(e.target.value)}>
                <option value="">All</option>
                <option value="Shirts">Shirts</option>
                <option value="Pants">Pants</option>
                <option value="Dresses">Dresses</option>
                <option value="Jackets">Jackets</option>
                <option value="Skirts">Skirts</option>
            </select>

            <select onChange={(e) => byPrice(e.target.value)}>
                <option value="">All Prices</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
            </select>

        </div>
    );
}
