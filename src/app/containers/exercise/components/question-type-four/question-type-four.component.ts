import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-question-type-four',
  templateUrl: './question-type-four.component.html',
  styleUrls: ['./question-type-four.component.scss']
})
export class QuestionTypeFourComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, OnDestroy {
  formGroup: FormGroup;

  constructor(private exerciseService: ExerciseService) {
    super();
  }

  ngOnInit(): void {
    this.setForm();
    console.log(this.data);
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  private setForm(): void {
    this.formGroup = new FormGroup({
      gapControl: new FormControl('')
    });
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE4 küsimust');
    this.questionChecked.emit(true);
  }

}
