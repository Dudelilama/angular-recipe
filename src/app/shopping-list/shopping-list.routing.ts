import {RouterModule, Routes} from "@angular/router";
import {RecipeComponent} from "../recipe/recipe.component";
import {RecipeStartComponent} from "../recipe/recipe-start.component";
import {RecipeEditComponent} from "../recipe/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "../recipe/recipe-detail/recipe-detail.component";
import {ShoppingListComponent} from "./shopping-list.component";

const SHOPPING_ROUTES: Routes = [
  {path: '', component: ShoppingListComponent}
];

export const shoppingListRouting = RouterModule.forChild(SHOPPING_ROUTES);
