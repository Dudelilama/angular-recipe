import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient [] = [];

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }

  updateIngredient(oldIngredient: Ingredient, ingredient: Ingredient) {
    this.ingredients[this.ingredients.indexOf(oldIngredient)] = ingredient;
  }
}
