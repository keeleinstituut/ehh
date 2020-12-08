import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ehh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
}
