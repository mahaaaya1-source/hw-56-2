export type IngredientType =
  | "BreadTop"
  | "BreadBottom"
  | "Meat"
  | "Cheese"
  | "Salad"
  | "Bacon";

export interface IngredientPriceMap {
  [key: string]: number;
}
