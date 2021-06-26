import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}
  podCastRecipes() {
    this.recipesChanged.next([...this.recipes]);
  }
  getRecipes() {
    return this.recipes.slice(); // to get a copy of the array (not the same reference)
  }
  addIngredientToShoppinList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    if (id <= this.recipes.length - 1) return this.recipes[id];

    return undefined;
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.podCastRecipes();
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.podCastRecipes();
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.podCastRecipes();
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.podCastRecipes();
  }
}
