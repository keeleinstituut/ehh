import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../../services/api/api.models';

@Component({
  selector: 'ehh-question-type-five',
  templateUrl: './question-type-five.component.html',
  styleUrls: ['./question-type-five.component.scss']
})
export class QuestionTypeFiveComponent implements OnInit {
  @Input() data: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
