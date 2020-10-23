import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../../services/api/api.models';

@Component({
  selector: 'ehh-question-type-three',
  templateUrl: './question-type-three.component.html',
  styleUrls: ['./question-type-three.component.scss']
})
export class QuestionTypeThreeComponent implements OnInit {
  @Input() data: Question;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
