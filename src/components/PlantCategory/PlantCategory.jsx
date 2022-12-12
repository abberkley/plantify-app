import React from "react";

import './PlantCategory.css';

const PlantCategory = ({ title, image }) => {
    return (
        <div className="plant-category">
            <img src={image} alt="" />
            <h4>{title}</h4>
        </div>
    );
}

export default PlantCategory;