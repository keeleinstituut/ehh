import { Component, OnInit } from '@angular/core';

const readMoreButtonDefault = 'Loe lisaks';

@Component({
  selector: 'ehh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  expanded = false;
  icon = 'icon-down';
  readMoreButton = readMoreButtonDefault;

  constructor() { }

  ngOnInit(): void {
  }



  toggleContent(): void {
    this.expanded = !this.expanded;
    this.icon = this.expanded ? 'icon-up' : 'icon-down';
    this.readMoreButton = this.expanded ? 'Loe vähem' : readMoreButtonDefault;
  }
}
