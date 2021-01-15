import {Recipe} from "./recipe.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class RecipeService {

  private readonly baseUrl = 'http://localhost:4200/api/recipe';

  private readonly httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  recipeChanged = new EventEmitter<Recipe[]>();

  constructor(private http: HttpClient) {
  }

  private recipes: Recipe[] = [];

  // [
  //   new Recipe('Ghackeds mit hörnli', 'Beschriibig', 'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/30e98609-5d83-4211-8d36-420eac7ba813/Derivates/56ce90a5-a7cf-42a9-92e7-21055b1e9de7.jpg', [new Ingredient('Hörnli', 100)]),
  //   new Recipe('Hörnlisalat', 'Beschriibig', 'https://www.gutekueche.ch/upload/rezept/5447/hoernlisalat.jpg', [new Ingredient('Hörnli', 100)])
  // ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    return this.http.put(this.baseUrl, body, {headers: this.httpHeaders});
  }

  fetchData() {
    this.http.get<Recipe[]>(this.baseUrl, {headers: this.httpHeaders})
      .subscribe(
        data => {
          this.recipes = data;
          this.recipeChanged.emit(data);
        }
      );
  }

}
