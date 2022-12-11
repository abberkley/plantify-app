import React from "react";

const PlantProduct = ({ image, title, price }) => {
    return (
        <div>
          <img src={image} alt="" />
          <div className="plant-product--content">
            <h5>{title}</h5>
            <p>{price}</p>  
          </div>
        </div>
    );
}

export default PlantProduct