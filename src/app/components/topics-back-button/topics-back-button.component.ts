import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ehh-topics-back-button',
    templateUrl: './topics-back-button.component.html',
    styleUrls: ['./topics-back-button.component.scss'],
    standalone: false
})
export class TopicsBackButtonComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
