import "../css/Dashboard.css";
//import profileImage from "../images/profile-img.png"
import FoodCard from "./FoodCard";
import Sidebar from "./Sidebar";
import { AvailableMeals } from "../Data/data";
import { Outlet } from "react-router-dom";
import useFetch from "../util/useFetch";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data] = useFetch('https://thucannhanh-production.up.railway.app/food')
  //console.log(data)
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <p>Good morning, Oghenevwede!</p>
            <p>What delicious meal are you craving today?</p>
          </div>
          {/* <div>
            <img src={profileImage} alt="profile-pic" />
          </div> */}
        </div> 
        <div className="dashboard-main">
        {data && data.map((item)=>{
          return ( 
            <FoodCard 
              foodName={item.name}
              foodImage={item.image}
              foodDescription={item.ingredient}
              foodPrice={item.price}
              key={item.id.toString()}
              id={item.id}
              meal={item}
            />
          )
        })}
          {/* {AvailableMeals.map((meal) => {
            return (
              <FoodCard
                foodName={meal.MealName}
                foodImage={meal.MealImage}
                foodDescription={meal.MealDescription}
                foodPrice={meal.MealPrice}
                key={meal.id.toString()}
                id={meal.id}
                meal={meal}
              />
            );
          })} */}
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Dashboard;
