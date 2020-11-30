import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { GapWriteComponent } from '../../../../components/gap-write/gap-write.component';
import { QuestionOption } from '../../../../services/api/api.models';
import { Subscription } from 'rxjs';
import { GapItem } from '../../services/exercise/exercise.models';

@Component({
  selector: 'ehh-question-type-four',
  templateUrl: './question-type-four.component.html',
  styleUrls: ['./question-type-four.component.scss']
})
export class QuestionTypeFourComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, AfterViewInit, OnDestroy {
  @ViewChild('textAndGaps') textAndGaps: ElementRef;

  formGroup: FormGroup;
  isBlockElement = false;
  private gaps: GapItem[] = [];
  private subscriptions$: Subscription[] = [];

  constructor(private exerciseService: ExerciseService) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
    const check$ = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });
    const readyToCheck$ = this.formGroup.valueChanges.subscribe(() => {
      this.readyToCheck.emit(this.formGroup.valid);
    });

    setTimeout(() => {
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
      this.showFeedback.emit(true);
    });

    this.subscriptions$ = [check$, readyToCheck$];
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.gaps = this.exerciseService.setGaps(this.textAndGaps);
    setTimeout(() => {
      this.isBlockElement = this.gaps.length === 1;
    });
    for (const gap of this.gaps) {
      const gapControlName = gap.gapControlName;
      this.formGroup.addControl(gapControlName, new FormControl('', Validators.required));
      const replacerElement = this.exerciseService.getReplacerElement(gap);

      const component = this.exerciseService.createEHHComponent('ehh-gap-write', GapWriteComponent);
      component.componentRef.instance.blockComponent = this.isGapShouldBeBlock(this.textAndGaps);
      component.componentRef.instance.soundPath = this.data.etalon_wav;
      component.componentRef.instance.controlName = gapControlName;
      component.componentRef.instance.formGroup = this.formGroup;
      component.componentRef.instance.playAudioAutomatically = this.isBlockElement;
      replacerElement.appendChild(component.element);
    }
  }

  private isGapShouldBeBlock(elementRef: ElementRef): boolean {
    const nativeElement = elementRef.nativeElement;
    const preFormattedText = nativeElement.textContent;
    return !preFormattedText.length;
  }

  private checkQuestion(): void {
    if (this.formGroup.valid) {
      const questionOptions = this.exerciseService.decodeQuestionOptions(this.data.options);
      const questionPassed = this.checkGaps(questionOptions);
      this.questionChecked.emit(questionPassed);
    } else {
      this.questionChecked.emit(null);
    }
  }

  private checkGaps(questionOptions: QuestionOption[]): boolean {
    const gapsAnswers: boolean[] = [];
    const formControls: FormControl = this.formGroup.value;
    this.gaps.forEach((gap) => {
      const gapValue = this.exerciseService.trimGapValue(formControls[gap.gapControlName]);
      for (const option of questionOptions) {
        if (gap.gapNumber === option.gap_nr && option.iscorrect === 1 && gapValue === option.text) {
          gapsAnswers.push(true);
          break;
        }
      }
    });
    return gapsAnswers.length === this.gaps.length;
  }
}
