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
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GapItem } from '../../services/exercise/exercise.models';
import { GapWriteComponent } from '../../../../components/gap-write/gap-write.component';

@Component({
  selector: 'ehh-question-type-three',
  templateUrl: './question-type-three.component.html',
  styleUrls: ['./question-type-three.component.scss']
})
export class QuestionTypeThreeComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, AfterViewInit, OnDestroy {
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
    console.log(this.data);
    this.readyToCheck.emit(true);
    this.questionChecked.emit(null);

    const options = this.exerciseService.decodeQuestionOptions(this.data.options);
    console.log('OPTIONS');
    console.log(options);

    this.formGroup = new FormGroup({});
  }

  ngAfterViewInit(): void {
    const element = this.textAndGaps.nativeElement;

    const preFormattedText = element.textContent;
    element.innerHTML = this.exerciseService.getFormattedText(preFormattedText);
    this.gaps = this.exerciseService.setGapItems(preFormattedText);

    for (const gap of this.gaps) {
      const gapControlName = gap.gapControlName;
      this.formGroup.addControl(gapControlName, new FormControl('', Validators.required));

      const elementId = `replacer_${gap.gapId}`;
      const el: HTMLElement = document.getElementById(elementId);

      const gapWrite = document.createElement('ehh-gap-write');
      const factory = this.componentFactoryResolver.resolveComponentFactory(GapWriteComponent);
      const gapWriteComponentRef = factory.create(this.injector, [], gapWrite);
      this.applicationRef.attachView(gapWriteComponentRef.hostView);
      gapWriteComponentRef.instance.soundPath = this.data.etalon_wav;
      gapWriteComponentRef.instance.controlName = gapControlName;
      gapWriteComponentRef.instance.formGroup = this.formGroup;
      el.appendChild(gapWrite);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

}
