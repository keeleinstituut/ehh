import { Component, OnDestroy, OnInit, } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { Question, QuestionOption } from '../../../../services/api/api.models';

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
      this.readyToCheck.emit(true);
      this.questionChecked.emit(null);
    });

    this.options = this.exerciseService.decodeQuestionOptions(this.data.options);
    console.log('OPTIONS');
    console.log(this.options);

    this.etalonType = this.decideEtalonType(this.data);
    this.optionType = this.decideOptionType(this.options[0]);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE1 küsimust');
    this.questionChecked.emit(false);
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
}
