import React from 'react';
import './Details.css';
const Details = (props) => {
    console.log(props.details);
    const {strMeal, strArea, strCategory} =props.details;
    return (
        <div>
            <div className="food-details">
                <h4>Name:{strMeal}</h4>
                <p>Category:{strCategory}</p>
                <p>Area:<small>{strArea}</small></p>
            </div>
        </div>
    );
};

export default Details;