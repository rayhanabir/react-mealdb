import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import './Food.css';
const Food = (props) => {
    // console.log(props)
    const{strMeal, strMealThumb, strCategory} = props.meal;
    const element =<FontAwesomeIcon icon={faInfo} />
    return (
        <div>
           <div className="food-area">
                <div className="food">
                    <img className="food-img" src={strMealThumb} alt="" /> 
                    <h3>Items: {strMeal}</h3>
                    <h4>Category: {strCategory}</h4> 
                    <button
                     onClick={()=>props.handleDetails(props.meal)}
                     
                      className="details-btn">{element} Details</button>
                </div> 
            </div> 
        </div>
    );
};

export default Food;