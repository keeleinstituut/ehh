import { Component, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-question-type-five',
  templateUrl: './question-type-five.component.html',
  styleUrls: ['./question-type-five.component.scss']
})
export class QuestionTypeFiveComponent extends QuestionBasicComponent implements QuestionComponent, OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.readyToCheck.emit(true);
    this.questionChecked.emit(null);
  }

}
