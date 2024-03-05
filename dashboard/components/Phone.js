import React from 'react';

const Phone = () => {
    return (
        <div className="container">
            <h1>Phone</h1>
            <div className="product-list">
                <img className="product-img" src='./assets/iphone.jpg' alt='phone'></img>
                <h5>Description:</h5>
                <p>IPhone 14 Plus</p>
                <h5>Price:</h5>
                <p>$500</p>
            </div>
        </div>
    );
};

export default Phone;