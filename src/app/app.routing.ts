import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/rezepte', pathMatch: 'full'},
  {path: 'rezepte', loadChildren: () => import('src/app/recipe/recipe.module').then(m => m.RecipeModule)},
  {path: 'einkaufsliste', loadChildren: () => import('src/app/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
