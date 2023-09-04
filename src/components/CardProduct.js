import "./CardProductStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="project-card">
      {props.hideContainer && (
        <div>
          <img src={props.imgsrc} alt="image" className="product-image"/>
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
          </div>
        </div>
      )}
      <div className="pro-links">
        {props.showButton && (
          <Link to={props.url}>
            <button className="btn-link">{props.button}</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
