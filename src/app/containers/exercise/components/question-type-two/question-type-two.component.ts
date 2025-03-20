import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { QuestionOption } from '../../../../services/api/api.models';

enum OptionsType {
  MANY_ANSWERS = 'checkbox',
  ONE_ANSWER = 'radio',
}

@Component({
    selector: 'ehh-question-type-two',
    templateUrl: './question-type-two.component.html',
    styleUrls: ['./question-type-two.component.scss'],
    standalone: false
})
export class QuestionTypeTwoComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, OnDestroy {
  options: QuestionOption[];
  optionsType: OptionsType;

  constructor(private exerciseService: ExerciseService) {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });

    setTimeout(() => {
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
      this.showFeedback.emit(true);
    });

    this.options = this.exerciseService.decodeQuestionOptions(this.data.options);
    this.optionsType = this.setOptionType(this.options);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  checkQuestion(): void {
    const isCorrect = this.verifyQuestion(this.options);
    this.questionChecked.emit(isCorrect);
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

  checkSelectionItemStatus(value: any): void {
    this.readyToCheck.emit(value);
  }

  private setOptionType(options: QuestionOption[]): OptionsType {
    const correctAnswers = options.filter(option => option.iscorrect === 1);
    return correctAnswers.length === 1 ? OptionsType.ONE_ANSWER : OptionsType.MANY_ANSWERS;
  }
}
