import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = { description: '', imagePath: '', name: '' };
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppinList(
      this.recipe.ingredients || []
    );
  }
}
