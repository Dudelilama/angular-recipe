import {NgModule} from "@angular/core";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeComponent} from "./recipe.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {recipeRouting} from "./recipe.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    recipeRouting
  ]
})
export class RecipeModule { }
