import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorage } from '../shared/data-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dsService: DataStorage) {}
  onSaveData() {
    this.dsService.storeRecipes();
  }
  onFetchData() {
    this.dsService.fetchRecipes();
  }
}
