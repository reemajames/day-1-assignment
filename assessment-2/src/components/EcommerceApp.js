import React from 'react';
import Product from './Product';
import productsData from '../data/product.json';
import '../styles/ecomm.css';

const EcommerceApp = () => {
    return (
        <div className="ecommerce-app">
            <h1>Welcome to E-commerce App</h1>
            <div className="product-list">
                {productsData.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default EcommerceApp;