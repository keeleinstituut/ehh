import { Component, Input } from '@angular/core';

@Component({
  selector: 'ehh-topics-back-button',
  templateUrl: './topics-back-button.component.html',
  styleUrls: ['./topics-back-button.component.scss'],
  standalone: false,
})
export class TopicsBackButtonComponent {
  @Input() title: string;

  constructor() {}
}
