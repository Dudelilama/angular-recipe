import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ghackeds mit hörnli', 'Beschriibig', 'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/30e98609-5d83-4211-8d36-420eac7ba813/Derivates/56ce90a5-a7cf-42a9-92e7-21055b1e9de7.jpg', [new Ingredient('Hörnli', 100)]),
    new Recipe('Hörnlisalat', 'Beschriibig', 'https://www.gutekueche.ch/upload/rezept/5447/hoernlisalat.jpg', [new Ingredient('Hörnli', 100)])
  ];
  selectedRecipe: Recipe;

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
