import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    )
  }

  onNewRecipe() {
   this.router.navigate(['/rezepte', 'neu']);
  }

  ngOnDestroy(): void {
    this.recipeService.recipeChanged.unsubscribe();
  }
}
