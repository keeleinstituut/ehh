import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ehh-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent implements OnInit {
  @Input() opened = true;
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.opened = false;
    this.closeMenu.emit(this.opened);
  }

}
