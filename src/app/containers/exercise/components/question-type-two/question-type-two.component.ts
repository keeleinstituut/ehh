import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionOption } from '../../../../services/api/api.models';

@Component({
  selector: 'ehh-question-type-two',
  templateUrl: './question-type-two.component.html',
  styleUrls: ['./question-type-two.component.scss']
})
export class QuestionTypeTwoComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, OnDestroy {
  formGroup: FormGroup = new FormGroup({});
  options: QuestionOption[];

  constructor(private exerciseService: ExerciseService) {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });

    setTimeout(() => {
      this.questionChecked.emit(null);
    });

    this.options = this.exerciseService.decodeQuestionOptions(this.data.options);
    console.log('OPTIONS');
    console.log(this.options);

    this.options.forEach((option, index) => {
      this.formGroup.addControl(`option${index}Control`, new FormControl(false));
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  checkQuestion(): void {
    const isCorrect = this.verifyQuestion(this.options);
    this.questionChecked.emit(isCorrect);
  }

  handleCheckboxes(value: boolean, index: number): void {
    this.options[index].selected = value;

    const controls = this.formGroup.value;
    for (const key in controls) {
      if (controls.hasOwnProperty(key) && controls[key] === true) {
        this.readyToCheck.emit(true);
        break;
      } else {
        this.readyToCheck.emit(false);
      }
    }
  }

  private verifyQuestion(options: QuestionOption[]): boolean {
    let correct = false;
    for (const option of options) {
      if ((option.iscorrect === 1 && option.selected) || (!option.iscorrect && !option.selected)) {
        correct = true;
      } else {
        correct = false;
        break;
      }
    }
    return correct;
  }
}
