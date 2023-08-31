// CardVariant.js
import "./CardVariantStyles.css";
import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CardVariant = (props) => {
  const { visible, prevCard, nextCard } = props;

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "60px",
    color: "gray",
    zIndex: 1,
    cursor: "pointer",
    transition: "color 0.3s",
    background: "none",
    border: "none",
    outline: "none",
    padding: 0,
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: "-90px",
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: "-90px",
  };

  return (
    <div className={`project-card ${visible ? 'visible' : 'hidden'}`}>
      <button onClick={prevCard} style={leftArrowStyles}>
        <FaArrowLeft />
      </button>
      <button onClick={nextCard} style={rightArrowStyles}>
        <FaArrowRight />
      </button>
      <img src={props.imgsrc} alt="image"/>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default CardVariant;
