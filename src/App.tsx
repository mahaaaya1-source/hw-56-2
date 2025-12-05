import React, { useState } from "react";
import { IngredientType } from "./types";
import { BurgerPreview } from "./components/BurgerPreview";
import { IngredientsPanel } from "./components/IngredientsPanel";
import { PriceBox } from "./components/PriceBox";

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  const addIngredient = (type: IngredientType) => {
    setIngredients((prev) => [...prev, type]);
  };

  const removeIngredient = (type: IngredientType) => {
    setIngredients((prev) => {
      const index = prev.indexOf(type);
      if (index === -1) return prev;
      return prev.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="container">
      <BurgerPreview ingredients={ingredients} />
      <IngredientsPanel
        add={addIngredient}
        remove={removeIngredient}
        current={ingredients}
      />
      <PriceBox ingredients={ingredients} />
    </div>
  );
};

export default App;
