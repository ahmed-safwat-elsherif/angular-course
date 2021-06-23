import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('addingForm') form: NgForm | undefined;
  slService$: Subscription = new Subscription();
  editMode = false;
  editedItemIndex: number | undefined;
  editedItem: Ingredient | undefined;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.slService$.unsubscribe();
  }
  ngOnInit(): void {
    this.slService$ = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientById(index);
        this.form?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex || 0,
        newIngredient
      );
    } else {
      this.shoppingListService.onIngredientAdded(newIngredient);
    }
    this.onClear();
  }
  onClear() {
    this.editMode = false; // to not to stuck in update mode
    this.form?.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex || 0);
    this.onClear();
  }
}
