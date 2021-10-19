
import { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Food from '../Food/Food';
import './Meal.css'
const Meal = () => {
    const [meals, setMeals] =useState([]);
    const [details, setDetails] =useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res =>res.json())
        .then(data => setMeals(data.meals))
    },[]);

    const handleDetails = meal =>{
        setDetails(meal)
    }
    return (
        <div>
           <div className="meal-container">
               <div className="details">
                   <Details details={details}></Details>
               </div>
               <div className="food-container">
                  <div className="food-card">
                  {
                       meals.map(meal=><Food meal ={meal}
                         key={meal.idMeal}
                         handleDetails={handleDetails}
                       ></Food>)
                   }
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Meal;