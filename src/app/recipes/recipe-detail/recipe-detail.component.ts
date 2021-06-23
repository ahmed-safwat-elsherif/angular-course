import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined = {
    description: '',
    imagePath: '',
    name: '',
  };
  recipeID: string = '';
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeID = params['id'];
      this.recipe = this.recipeService.getRecipeById(+this.recipeID);
    });
    /**
     * The following trial won't workning fine as the router should
     * be listening (subscribing) on any changes of the URL to be
     * able the render the required sub route (children)
     */
    // this.recipeID = this.route.snapshot.paramMap.get('id') || "";
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppinList(
      this.recipe?.ingredients || []
    );
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../',this.recipeID,'edit'], { relativeTo: this.route });
  }
  onDeleteRecipe() {}
}
