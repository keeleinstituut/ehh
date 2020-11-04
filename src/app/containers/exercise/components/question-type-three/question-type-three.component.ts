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
import { DropAreaComponent, SentItem } from '../../../../components/drop-area/drop-area.component';
import { QuestionOption } from '../../../../services/api/api.models';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ehh-question-type-three',
  templateUrl: './question-type-three.component.html',
  styleUrls: ['./question-type-three.component.scss']
})
export class QuestionTypeThreeComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, AfterViewInit, OnDestroy {
  @ViewChild('textAndGaps') textAndGaps: ElementRef;
  formGroup: FormGroup;
  dropAreas: string[] = [];
  private gaps: GapItem[] = [];
  private subscriptions$: Subscription[] = [];
  options: QuestionOption[];
  gapComponentsLoaded = false;
  private filledGaps: QuestionOption[] = [];

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
    });

    this.options = this.exerciseService.decodeQuestionOptions(this.data.options);
    this.options = this.options.map((option, index) => ({ ...option, dragItemPosition: index }));
    console.log('OPTIONS');
    console.log(this.options);

    const check$ = this.exerciseService.check
      .subscribe(() => {
        this.checkQuestion();
      });
    this.subscriptions$.push(check$);

    this.formGroup = new FormGroup({});
  }

  ngAfterViewInit(): void {
    const element = this.textAndGaps.nativeElement;

    const preFormattedText = element.textContent;
    element.innerHTML = this.exerciseService.getFormattedText(preFormattedText);
    this.gaps = this.exerciseService.setGapItems(preFormattedText);

    for (const gap of this.gaps) {
      const gapControlName = gap.gapControlName;
      this.dropAreas.push(gapControlName);
      this.formGroup.addControl(gapControlName, new FormControl('', Validators.required));

      const elementId = `replacer_${gap.gapId}`;
      const el: HTMLElement = document.getElementById(elementId);

      const dropArea = document.createElement('ehh-drop-area');
      const factory = this.componentFactoryResolver.resolveComponentFactory(DropAreaComponent);
      const dropAreaComponentComponentRef = factory.create(this.injector, [], dropArea);
      this.applicationRef.attachView(dropAreaComponentComponentRef.hostView);
      dropAreaComponentComponentRef.instance.dropAreaId = gapControlName;
      const dropArea$ = dropAreaComponentComponentRef.instance.itemArrived.subscribe((arrivedItem: SentItem) => {
        this.addGapToPool(arrivedItem);
      });
      this.subscriptions$.push(dropArea$);
      el.appendChild(dropArea);
    }
    // TODO Throws Error: ExpressionChangedAfterItHasBeenCheckedError
    this.gapComponentsLoaded = true;
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  drop(event: CdkDragDrop<any>): void {
    console.log('dropped to QuestionTypeThreeComponent');
    const initialPosition = event.previousContainer.data[0].dragItemPosition;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const itemData = event.previousContainer.data[0];
      this.removeGapFromFilledGaps(itemData);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        initialPosition);
    }
  }

  private addGapToPool(arrivedItem: SentItem): void {
    this.filledGaps.push(arrivedItem.itemData);
    this.formGroup.controls[arrivedItem.controlName].patchValue(arrivedItem.itemData);
    this.isAllGapsFilled();
  }

  private isAllGapsFilled(): void {
    const isGapsFilled = this.filledGaps?.length === this.gaps?.length;
    this.readyToCheck.emit(isGapsFilled);
  }

  private removeGapFromFilledGaps(itemData: QuestionOption): void {
    const gapIndex = this.filledGaps.findIndex((gap) => gap.id === itemData.id);
    this.filledGaps.splice(gapIndex, 1);
    this.isAllGapsFilled();
  }

  private checkQuestion(): void {
    const questionPassed = this.checkGaps(this.gaps);
    this.questionChecked.emit(questionPassed);
  }

  private checkGaps(gaps: GapItem[]): boolean {
    const gapsAnswers: boolean[] = [];
    const formControls: FormControl = this.formGroup.value;
    gaps.forEach((gap) => {
      if (formControls[gap.gapControlName].gap_nr === gap.gapNumber) {
        gapsAnswers.push(true);
      }
    });
    return gapsAnswers.length === gaps.length;
  }
}
