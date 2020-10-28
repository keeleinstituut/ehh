import { Component, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-question-type-three',
  templateUrl: './question-type-three.component.html',
  styleUrls: ['./question-type-three.component.scss']
})
export class QuestionTypeThreeComponent extends QuestionBasicComponent implements QuestionComponent, OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.readyToCheck.emit(true);
    this.questionChecked.emit(null);
  }

}
