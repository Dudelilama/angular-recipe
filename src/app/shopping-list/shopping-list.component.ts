import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
  }

  onSelectItem(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }

  onCleared() {
    this.selectedIngredient = null;
  }
}
