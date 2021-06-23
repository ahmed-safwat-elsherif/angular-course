import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],

  // changeDetection.
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;
  constructor() {}

  ngOnInit(): void {}
}
