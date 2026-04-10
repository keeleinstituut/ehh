import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ehh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false,
})
export class MenuComponent {
  @Input() opened = true;
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  close(): void {
    this.opened = false;
    this.closeMenu.emit(this.opened);
  }
}
