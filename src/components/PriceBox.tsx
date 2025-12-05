import React from "react";
import { INGREDIENT_PRICES } from "../data/ingredients";
import { IngredientType } from "../types";

interface Props {
  ingredients: IngredientType[];
}

export const PriceBox: React.FC<Props> = ({ ingredients }) => {
  const total = ingredients.reduce((acc, item) => {
    return acc + INGREDIENT_PRICES[item];
  }, 30); 

  return (
    <div className="price-box">
      <h3>Цена: {total} сом</h3>
    </div>
  );
};
