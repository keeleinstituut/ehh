import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ehh-question-directive',
    templateUrl: './question-directive.component.html',
    styleUrls: ['./question-directive.component.scss'],
    standalone: false
})
export class QuestionDirectiveComponent implements OnInit {
  @Input() directive: string;

  constructor() { }

  ngOnInit(): void {
  }

}
