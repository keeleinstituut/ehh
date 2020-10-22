import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionComponent } from '../question.component';
import { Question } from '../../../../services/api/api.models';

@Component({
  selector: 'ehh-question-type-one',
  templateUrl: './question-type-one.component.html',
  styleUrls: ['./question-type-one.component.scss']
})
export class QuestionTypeOneComponent implements QuestionComponent, OnInit {
  @Input() data: Question;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() questionChecked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
