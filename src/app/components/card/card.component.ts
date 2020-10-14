import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ehh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() imageLocation = '/assets/img/';

  constructor() { }

  ngOnInit(): void {
  }

}
