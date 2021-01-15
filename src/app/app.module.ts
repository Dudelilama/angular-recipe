import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecipeService} from "./recipe/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [ShoppingListService,
    RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
