import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormGroup } from '@angular/forms';
import { GapItem } from '../../services/exercise/exercise.models';
import { Subscription } from 'rxjs';
import { QuestionOption } from '../../../../services/api/api.models';

@Component({
  selector: 'ehh-question-type-three-one',
  templateUrl: './question-type-three-one.component.html',
  styleUrls: ['./question-type-three-one.component.scss']
})
export class QuestionTypeThreeOneComponent extends QuestionBasicComponent
  implements QuestionComponent, OnInit, AfterViewInit {
  @ViewChild('textAndGaps') textAndGaps: ElementRef;

  constructor(private exerciseService: ExerciseService) {
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
