import {NgModule} from "@angular/core";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {FormsModule} from "@angular/forms";
import {shoppingListRouting} from "./shopping-list.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ShoppingListAddComponent,
    ShoppingListComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    shoppingListRouting
  ]
})
export class ShoppingListModule { }
