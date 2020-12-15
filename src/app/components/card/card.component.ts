import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'ehh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() image: string;

  defaultImg: string;
  private readonly imgHost: string;

  constructor() {
    this.imgHost = environment.imageMainUrl;
  }

  ngOnInit(): void {
    this.defaultImg = `${this.imgHost}/${this.image}`;
  }

}
