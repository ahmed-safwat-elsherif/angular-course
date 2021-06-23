import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];
  getIngredients() {
    return [...this.ingredients];
  }
  private podCastIngredients() {
    this.ingredientsChanged.next([...this.ingredients]);
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.podCastIngredients();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.podCastIngredients();
  }
  getIngredientById(index: number) {
    return this.ingredients[index];
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.podCastIngredients();
  }
}
