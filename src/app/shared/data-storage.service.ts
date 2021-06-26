import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './../recipes/services/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root', // instead of adding it to providers in app.module
})
export class DataStorage {
  baseUrl =
    'https://angular-course-3ffdf-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    let headers = new Headers({ 'content-type': 'application/json' });
    this.http.put(this.baseUrl, recipes).subscribe((response) => {
      console.log(response);
    });
  }
  fetchRecipes() {
    return this.http.get<Recipe[]>(this.baseUrl).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
