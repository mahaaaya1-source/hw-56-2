import React from "react";
import { AVAILABLE_INGREDIENTS } from "../data/ingredients";
import { IngredientType } from "../types";

interface Props {
  add: (type: IngredientType) => void;
  remove: (type: IngredientType) => void;
  current: IngredientType[];
}

export const IngredientsPanel: React.FC<Props> = ({
  add,
  remove,
  current,
}) => {
  const countIngredient = (type: IngredientType) =>
    current.filter((i) => i === type).length;

  return (
    <div className="panel">
      <h2>Ингредиенты</h2>

      {AVAILABLE_INGREDIENTS.map((item) => (
        <div className="panel-row" key={item}>
          <span>{item}</span>

          <div className="panel-buttons">
            <button onClick={() => remove(item)}>-</button>
            <span>{countIngredient(item)}</span>
            <button onClick={() => add(item)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
