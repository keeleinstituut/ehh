import { Component, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-question-type-two',
  templateUrl: './question-type-two.component.html',
  styleUrls: ['./question-type-two.component.scss']
})
export class QuestionTypeTwoComponent extends QuestionBasicComponent implements QuestionComponent, OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    setTimeout(() => {
      this.readyToCheck.emit(true);
      this.questionChecked.emit(null);
    });
  }

}
