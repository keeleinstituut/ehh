import { Component, OnDestroy, OnInit, } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { Question, QuestionOption } from '../../../../services/api/api.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

enum EtalonType {
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
  optionType: EtalonType;
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
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
    });

    this.options = this.exerciseService.decodeQuestionOptions(this.data.options);
    console.log('OPTIONS');
    console.log(this.options);

    this.etalonType = this.decideEtalonType(this.data);
    this.optionType = this.decideOptionType(this.options[0]);

    this.formGroup = new FormGroup({
      optionControl: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE1 küsimust');
    console.log(this.formGroup);
    if (!this.formGroup.valid) return;
    const isCorrect = this.verifyQuestion(this.formGroup);
    this.questionChecked.emit(isCorrect);
  }

  private decideEtalonType(question: Question): EtalonType {
    if (question.etalon_img?.length) return EtalonType.IMAGE;
    if (question.etalon_wav?.length) return EtalonType.AUDIO;
    return EtalonType.TEXT;
  }

  private decideOptionType(option: QuestionOption): EtalonType {
    if (option.img?.length) return EtalonType.IMAGE;
    if (option.wav?.length) return EtalonType.AUDIO;
    return EtalonType.TEXT;
  }

  handleRadioButtons(value: any): void {
    this.options.forEach((option, index) => {
      this.options[index].selected = option.id === value;
    });
    if (this.formGroup.valid) this.readyToCheck.emit(true);
  }

  private verifyQuestion(formGroup: FormGroup): boolean {
    const selectedOptionId = formGroup.controls.optionControl.value;
    const selectedOption = this.options.find(option => option.id === selectedOptionId);
    return selectedOption.iscorrect === 1;
  }
}
