import React from "react";
import { currencyFormatter } from "../util/Firmatting.js";
import Button from "./UI/Button.jsx";
export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          {/* <button>Add To Cart</button> */}
          <Button>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
