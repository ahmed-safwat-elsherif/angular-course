import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [new Ingredient('Apple', 5), new Ingredient('Banana', 3)]
    ),
    new Recipe(
      'Another test recipe',
      'This is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [new Ingredient('Apple', 10), new Ingredient('Banana', 5)]
    ),
  ];

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
}
