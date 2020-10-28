import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { GapWriteComponent } from '../../../../components/gap-write/gap-write.component';
import { QuestionOption } from '../../../../services/api/api.models';

interface GapItem {
  gapId: number;
  gapNumber: number;
  gapControlName: string;
}

@Component({
  selector: 'ehh-question-type-four',
  templateUrl: './question-type-four.component.html',
  styleUrls: ['./question-type-four.component.scss']
})
export class QuestionTypeFourComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, AfterViewInit, OnDestroy {
  @ViewChild('textAndGaps') textAndGaps: ElementRef;
  formGroup: FormGroup;
  private gaps: GapItem[] = [];

  constructor(
    private exerciseService: ExerciseService,
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.exerciseService.decodeQuestionOptions(this.data.options));
    this.subscription = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });

    this.formGroup = new FormGroup({});
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Get container where text is replaced with component
    const element = this.textAndGaps.nativeElement;
    const preFormattedText = element.textContent;
    // Replace string with HTML container
    element.innerHTML = this.getFormattedText(preFormattedText);

    for (const gap of this.gaps) {
      // Add gap control to form group
      const gapControlName = gap.gapControlName;
      this.formGroup.addControl(gapControlName, new FormControl('', Validators.required));

      // Get element by ID where ehh-gap-write is inserted
      const elementId = `replacer_${gap.gapId}`;
      const el: HTMLElement = document.getElementById(elementId);

      // Use componentFactoryResolver to add ehh-gap-write component to template
      const gapWrite = document.createElement('ehh-gap-write');
      const factory = this.componentFactoryResolver.resolveComponentFactory(GapWriteComponent);
      const gapWriteComponentRef = factory.create(this.injector, [], gapWrite);
      this.applicationRef.attachView(gapWriteComponentRef.hostView);

      // Define ehh-gap-write component variables and form control
      gapWriteComponentRef.instance.soundPath = this.data.etalon_wav;
      gapWriteComponentRef.instance.controlName = gapControlName;
      gapWriteComponentRef.instance.formGroup = this.formGroup;
      el.appendChild(gapWrite);
    }
  }

  getFormattedText(text): string {
    const parts = text.split(/(\b__[0-9]__+\b)/gi);
    for (let i = 1; i < parts.length; i += 2) {
      this.setGapItems(parts[i], i);
      parts[i] = `<span id="replacer_${i}"></span>`;
    }
    return parts.join('');
  }

  private setGapItems(gapString: string, gapId: number): void {
    const gapIdString = gapString.split('__')[1];
    const gapNumber =  parseInt(gapIdString, 10);
    const gapControlName = `gapControl${gapId}`;
    const gap: GapItem = { gapNumber, gapId, gapControlName };
    this.gaps.push(gap);
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE4 küsimust');
    console.log(this.formGroup);
    if (this.formGroup.valid) {
      const questionOptions = this.exerciseService.decodeQuestionOptions(this.data.options);
      const questionPassed = this.checkGaps(questionOptions);
      this.questionChecked.emit(questionPassed);
    } else {
      this.questionChecked.emit(null);
    }
  }

  private trimGapValue(value: string): string {
    return value.trim().toLowerCase();
  }

  private checkGaps(questionOptions: QuestionOption[]): boolean {
    const gapsAnswers: boolean[] = [];
    const formControls: FormControl = this.formGroup.value;
    this.gaps.forEach((gap) => {
      const gapValue = this.trimGapValue(formControls[gap.gapControlName]);
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
