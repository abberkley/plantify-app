import React from "react";

const PlantCategory = ({ title, image }) => {
    return (
        <div>
            <img src={image} alt="" />
            <h4>{title}</h4>
        </div>
    );
}

export default PlantCategory;