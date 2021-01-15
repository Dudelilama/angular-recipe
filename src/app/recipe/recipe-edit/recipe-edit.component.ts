import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeId: number;
  private subscription: Subscription;
  private isNew = true;
  private recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.isNew = false;
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.recipeId);
      } else {
        this.isNew = true;
        this.recipe = null;
      }
    });

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('ingredients')) {
        for (let ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, Validators.required)
            })
          )
        }
      }
      recipeName = this.recipe.name;
      recipeDescription = this.recipe.description;
      recipeImagePath = this.recipe.imagePath;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  getIngredientsForm() {
    return (this.recipeForm.get('ingredients') as FormArray);
  }

  onSubmit() {
    const newReccipe = this.recipeForm.value;
    if(this.isNew) {
      this.recipeService.addRecipe(newReccipe);
    } else {
      this.recipeService.updateRecipe(this.recipe, newReccipe);
    }

    this.onNavigateBack();
  }

  onCancel() {
    this.onNavigateBack();
  }

  onNavigateBack() {
    this.router.navigate(['/']);
  }

  onAddIngredientControl(name: string, amount: string) {
    this.getIngredientsForm().push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, [Validators.required, Validators.min(1)])
      })
    );
  }

  onRemoveIngredientControl(index: number) {
    this.getIngredientsForm().removeAt(index);
  }
}
