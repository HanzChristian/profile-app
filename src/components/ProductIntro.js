import React, { useState, useEffect } from 'react';
import './ProductIntroStyles.css';

const ProductIntro = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Set the fadeIn state to true after a short delay (you can adjust the delay)
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`container-product ${fadeIn ? 'fade-in' : ''}`}>
            <div className='product-content'>
                <p>By collaborating with local farmers and other stakeholders, our company is committed to providing the best quality damar and other products to our customers.</p>
            </div>
            <div className='product-img'>
                <img
                    src="https://images.unsplash.com/photo-1545830790-68595959c491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                    alt="Product"
                    style={{ maxWidth: '40%', marginLeft: '20rem', flexShrink: 0,borderRadius:15 }}
                />
            </div>
        </div>
    );
};

export default ProductIntro;
