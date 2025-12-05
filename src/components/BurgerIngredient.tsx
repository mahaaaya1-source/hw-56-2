import React from "react";
import { IngredientType } from "../types";

interface Props {
  type: IngredientType;
}

export const BurgerIngredient: React.FC<Props> = ({ type }) => {
  switch (type) {
    case "BreadTop":
      return (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );

    case "BreadBottom":
      return <div className="BreadBottom"></div>;

    case "Meat":
      return <div className="Meat"></div>;

    case "Cheese":
      return <div className="Cheese"></div>;

    case "Salad":
      return <div className="Salad"></div>;

    case "Bacon":
      return <div className="Bacon"></div>;

    default:
      return null;
  }
};
