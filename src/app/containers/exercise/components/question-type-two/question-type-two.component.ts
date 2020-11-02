import { Component, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';

@Component({
  selector: 'ehh-question-type-two',
  templateUrl: './question-type-two.component.html',
  styleUrls: ['./question-type-two.component.scss']
})
export class QuestionTypeTwoComponent extends QuestionBasicComponent implements QuestionComponent, OnInit {

  constructor(private exerciseService: ExerciseService,) {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    setTimeout(() => {
      this.readyToCheck.emit(true);
      this.questionChecked.emit(null);
    }, 0);

    const options = this.exerciseService.decodeQuestionOptions(this.data.options);
    console.log('OPTIONS');
    console.log(options);
  }

}
