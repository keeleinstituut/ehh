import { Component, OnDestroy, OnInit, } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { Question, QuestionOption } from '../../../../services/api/api.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export enum EtalonType {
  IMAGE = 'image',
  AUDIO = 'audio',
  TEXT = 'text'
}

@Component({
  selector: 'ehh-question-type-one',
  templateUrl: './question-type-one.component.html',
  styleUrls: ['./question-type-one.component.scss']
})
export class QuestionTypeOneComponent extends
  QuestionBasicComponent implements QuestionComponent, OnInit, OnDestroy {
  etalonType: EtalonType;
  options: QuestionOption[];
  formGroup: FormGroup;

  constructor(
    private exerciseService: ExerciseService,
  ) { super(); }

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

    this.etalonType = this.decideEtalonType(this.data);

    this.formGroup = new FormGroup({
      optionControl: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  checkQuestion(): void {
    const isCorrect = this.verifyQuestion(this.options);
    this.questionChecked.emit(isCorrect);
  }

  private decideEtalonType(question: Question): EtalonType {
    if (question.etalon_img?.length) return EtalonType.IMAGE;
    if (question.etalon_wav?.length) return EtalonType.AUDIO;
    return EtalonType.TEXT;
  }

  checkSelectionItemStatus(value: QuestionOption[]): void {
    this.readyToCheck.emit(true);
  }

  private verifyQuestion(options: QuestionOption[]): boolean {
    const selectedOption = options.find(option => option.selected);
    return selectedOption.iscorrect === 1;
  }
}
