import React from "react";
import { BurgerIngredient } from "./BurgerIngredient";
import { IngredientType } from "../types";

interface Props {
  ingredients: IngredientType[];
}

export const BurgerPreview: React.FC<Props> = ({ ingredients }) => {
  return (
    <div className="Burger">
      <BurgerIngredient type="BreadTop" />

      {ingredients.length === 0 && <p>Добавьте ингредиенты</p>}

      {ingredients.map((item, index) => (
        <BurgerIngredient key={index} type={item} />
      ))}

      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};
