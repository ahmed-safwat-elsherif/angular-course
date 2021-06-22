import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveRecipe]',
})
export class ActiveRecipeDirective {
  @HostBinding('class.active') isOpen: boolean = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = true;
    setTimeout(() => {
      this.isOpen = false;
    }, 500);
  }
}
