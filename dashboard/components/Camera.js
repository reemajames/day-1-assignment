import React from 'react';

const Camera = () => {
    return (
        <div className="container">
            <h1>Nikon Camera</h1>
            <div className="product-list">
                <img src='./assets/camera.webp' alt='camera'></img>
                <h5>Description:</h5>
                <p>Nikon 900 mega pixel Camera</p>
                <h5>Price:</h5>
                <p>$200</p>
            </div>
        </div>
    );
};

export default Camera;