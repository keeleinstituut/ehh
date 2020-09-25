import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ehh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  expanded = false;

  constructor() { }

  ngOnInit(): void {
  }



  toggleContent(): void {
    this.expanded = !this.expanded;
  }
}
