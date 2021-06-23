import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveRecipe]',
})
export class ActiveRecipeDirective {
  @HostBinding('class.active') isOpen: boolean = false;
  @HostListener('mouseenter') isMouseEnter() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') isMouseLeave() {
    this.isOpen = false;
  }
}
