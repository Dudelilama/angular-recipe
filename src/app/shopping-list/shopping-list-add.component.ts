import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  @Output("cleared") clearedEvent = new EventEmitter();
  isAdd = true;

  constructor(private shopService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    let ingredient = new Ingredient(f.value.name, f.value.amount);
    console.log("ingredient is add " + this.isAdd);
    console.log(ingredient);
    console.log("selected ingredient");
    console.log(this.selectedIngredient);
    if(this.isAdd) {
      this.shopService.addIngredient(ingredient);
    }
    else {
      this.shopService.updateIngredient(this.selectedIngredient, ingredient);
    }
    this.onClear(f);
  }

  onClear(f: NgForm) {
    f.resetForm();
    this.clearedEvent.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.selectedIngredient.currentValue == null) {
      this.selectedIngredient = new Ingredient(null, null);
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }

  }

  onDelete(f: NgForm) {
    this.shopService.deleteIngredient(this.selectedIngredient);
    this.onClear(f);
  }
}
