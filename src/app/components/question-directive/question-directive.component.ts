import { Component, Input } from '@angular/core';

@Component({
  selector: 'ehh-question-directive',
  templateUrl: './question-directive.component.html',
  styleUrls: ['./question-directive.component.scss'],
  standalone: false,
})
export class QuestionDirectiveComponent {
  @Input() directive: string;

  constructor() {}
}
