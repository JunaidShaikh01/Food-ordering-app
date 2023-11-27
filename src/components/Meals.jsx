// import React, { useState, useEffect } from "react";

// export default function Meals() {
//   const [isLoaded, setIsLoaded] = useState([]);

//   useEffect(() => {
//     async function fetchMeals() {
//       const responce = await fetch("http://localhost:3000/meals");
//       const meals = await responce.json();
//       setIsLoaded(meals);
//     }
//     fetchMeals();
//   }, []);

//   return (
//     <ul id="meals">
//       {isLoaded.map((meal) => (
//         <li key={meal.id}>{meal.name}</li>
//       ))}
//     </ul>
//   );
// }

import React, { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const responce = await fetch("http://localhost:3000/meals");
      const meals = await responce.json();
      setIsLoading(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {isLoading.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
