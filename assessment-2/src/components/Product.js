import React from 'react';

const Product = ({ product }) => {
    const { image, name, description, price } = product;
    return (
        <div className="product">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <div className="buttons">
                <button className="like-btn">LIKE</button>
                <button className="share-btn">SHARE</button>
            </div>
        </div>
    );
};
export default Product;