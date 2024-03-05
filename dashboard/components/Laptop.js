import React from 'react';

const Laptop = () => {
    return (
        <div className="container">
            <h1>HP Laptop</h1>
            <div className="product-list">
                <img className="product-img" src='./assets/laptop.jpg' alt='laptop'></img>
                <h5>Description:</h5>
                <p>HP Elite Book</p>
                <h5>Price:</h5>
                <p>$400</p>
            </div>
        </div>
    );
};

export default Laptop;