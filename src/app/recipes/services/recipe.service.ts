import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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

  getRecipes() {
    return this.recipes.slice(); // to get a copy of the array (not the same reference)
  }
  addIngredientToShoppinList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}