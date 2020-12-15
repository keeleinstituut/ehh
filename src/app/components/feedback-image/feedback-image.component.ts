import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ehh-feedback-image',
  templateUrl: './feedback-image.component.html',
  styleUrls: ['./feedback-image.component.scss']
})
export class FeedbackImageComponent implements OnInit {
  @Input() imgs: string[];

  defaultImg: string;
  private readonly imgHost: string;

  constructor() {
    this.imgHost = environment.imageMainUrl;
  }

  ngOnInit(): void {
    this.defaultImg = `${this.imgHost}/l6pupilt.svg`;
  }

}
