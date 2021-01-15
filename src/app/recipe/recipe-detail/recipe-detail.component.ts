import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeId: number;
  private subscription: Subscription;
  constructor(private recipeService: RecipeService,
              private shoppingService: ShoppingListService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
        return;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddToList() {
    this.shoppingService.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['bearbeiten'], {relativeTo: this.activatedRoute});
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/rezepte']);
  }
}
