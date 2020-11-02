import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';

@Component({
  selector: 'ehh-question-type-three-one',
  templateUrl: './question-type-three-one.component.html',
  styleUrls: ['./question-type-three-one.component.scss']
})
export class QuestionTypeThreeOneComponent extends QuestionBasicComponent
  implements QuestionComponent, OnInit, AfterViewInit {

  constructor(private exerciseService: ExerciseService,) {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    setTimeout(() => {
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
    }, 0);

    const options = this.exerciseService.decodeQuestionOptions(this.data.options);
    console.log('OPTIONS');
    console.log(options);
  }

  ngAfterViewInit(): void {

  }

}
