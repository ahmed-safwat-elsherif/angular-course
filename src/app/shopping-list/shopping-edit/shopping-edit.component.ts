import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }
}
