import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = { description: '', imagePath: '', name: '' };
  @Input() index: number | undefined;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}
}
