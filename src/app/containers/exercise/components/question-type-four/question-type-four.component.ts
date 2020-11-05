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
  private gaps: GapItem[] = [];
  private subscriptions$: Subscription[] = [];

  constructor(
    private exerciseService: ExerciseService,
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
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

    this.subscriptions$ = [check$, readyToCheck$];
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit(): void {
    // Get container where text is replaced with component
    const element = this.textAndGaps.nativeElement;

    // Replace string with HTML container
    const preFormattedText = element.textContent;
    element.innerHTML = this.exerciseService.getFormattedText(preFormattedText);
    this.gaps = this.exerciseService.setGapItems(preFormattedText);

    for (const gap of this.gaps) {
      // Add gap control to form group
      const gapControlName = gap.gapControlName;
      this.formGroup.addControl(gapControlName, new FormControl('', Validators.required));

      // Get element by ID where ehh-gap-write is inserted
      const replacerElement = this.exerciseService.getReplacerElement(gap);

      // Use componentFactoryResolver to add ehh-gap-write component to template
      const gapWrite = document.createElement('ehh-gap-write');
      const factory = this.componentFactoryResolver.resolveComponentFactory(GapWriteComponent);
      const gapWriteComponentRef = factory.create(this.injector, [], gapWrite);
      this.applicationRef.attachView(gapWriteComponentRef.hostView);

      // Define ehh-gap-write component variables and form control
      gapWriteComponentRef.instance.soundPath = this.data.etalon_wav;
      gapWriteComponentRef.instance.controlName = gapControlName;
      gapWriteComponentRef.instance.formGroup = this.formGroup;
      replacerElement.appendChild(gapWrite);
    }
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
