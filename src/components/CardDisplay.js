import "./CardProductStyles.css"
import CardProduct from "./CardProduct"
import CardProductData from "./CardProductData"
import React, { useState, useEffect } from 'react';

const CardDisplay = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Set the fadeIn state to true after a short delay (you can adjust the delay)
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="work-container">
            <h1 className="project-heading">Our Products</h1>
            <div className={`project-container ${fadeIn ? 'fade-in' : ''}`}>
            {CardProductData.map((val, ind) => {
          const showButton = ind < 2; // Show button for index 0, 1, and 2
          return (
            <CardProduct
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              url={val.url}
              button={val.button}
              showButton={showButton} // Pass the showButton flag to Card
            />
          );
        })}
            </div>
        </div>
    )
}

export default CardDisplay;
