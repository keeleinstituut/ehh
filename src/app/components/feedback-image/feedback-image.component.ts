import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-feedback-image',
  templateUrl: './feedback-image.component.html',
  styleUrls: ['./feedback-image.component.scss']
})
export class FeedbackImageComponent implements OnInit {
  @Input() imgs: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
