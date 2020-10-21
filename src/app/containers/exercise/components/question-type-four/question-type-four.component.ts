import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../../services/api/api.models';

@Component({
  selector: 'ehh-question-type-four',
  templateUrl: './question-type-four.component.html',
  styleUrls: ['./question-type-four.component.scss']
})
export class QuestionTypeFourComponent implements OnInit {
  @Input() data: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
