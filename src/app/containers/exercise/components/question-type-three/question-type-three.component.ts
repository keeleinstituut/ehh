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
import { DropAreaComponent } from '../../../../components/drop-area/drop-area.component';
import { QuestionOption } from '../../../../services/api/api.models';

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
  options: QuestionOption[];

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
    setTimeout(() => {
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
    }, 0);

    this.options = this.exerciseService.decodeQuestionOptions(this.data.options);
    console.log('OPTIONS');
    console.log(this.options);

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

      const dropArea = document.createElement('ehh-drop-area');
      const factory = this.componentFactoryResolver.resolveComponentFactory(DropAreaComponent);
      const dropAreaComponentComponentRef = factory.create(this.injector, [], dropArea);
      this.applicationRef.attachView(dropAreaComponentComponentRef.hostView);
      // dropAreaComponentComponentRef.instance.soundPath = this.data.etalon_wav;
      // dropAreaComponentComponentRef.instance.controlName = gapControlName;
      // dropAreaComponentComponentRef.instance.formGroup = this.formGroup;
      el.appendChild(dropArea);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

}
