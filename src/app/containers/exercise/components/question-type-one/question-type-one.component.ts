import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';

@Component({
  selector: 'ehh-question-type-one',
  templateUrl: './question-type-one.component.html',
  styleUrls: ['./question-type-one.component.scss']
})
export class QuestionTypeOneComponent extends
  QuestionBasicComponent implements QuestionComponent, OnInit, OnDestroy {

  constructor(
    private exerciseService: ExerciseService,
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });

    this.readyToCheck.emit(true);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE1 küsimust');
    this.questionChecked.emit(false);
  }
}
