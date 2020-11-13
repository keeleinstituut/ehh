import { Component, OnDestroy, OnInit, } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { Question, QuestionOption } from '../../../../services/api/api.models';

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
  private etalonSound: string;

  constructor(
    private exerciseService: ExerciseService,
  ) { super(); }

  async ngOnInit(): Promise<void> {
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });

    setTimeout(() => {
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
    });

    this.options = this.exerciseService.decodeQuestionOptions(this.data.options);
    this.etalonType = this.decideEtalonType(this.data);
    await this.playEtalonSound();
  }

  private async playEtalonSound(): Promise<void> {
    this.etalonSound = this.data.etalon_wav;
    if (this.etalonSound?.length) {
      await this.exerciseService.playEtalonSound(this.etalonSound);
    }
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

  checkSelectionItemStatus(): void {
    this.readyToCheck.emit(true);
  }

  private verifyQuestion(options: QuestionOption[]): boolean {
    const selectedOption = options.find(option => option.selected);
    return selectedOption.iscorrect === 1;
  }
}
