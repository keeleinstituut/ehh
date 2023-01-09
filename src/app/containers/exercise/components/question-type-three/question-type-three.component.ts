import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { CreatedEHHComponent, ExerciseService } from '../../services/exercise/exercise.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GapItem } from '../../services/exercise/exercise.models';
import { DropAreaComponent, SentItem } from '../../../../components/drop-area/drop-area.component';
import { QuestionOption } from '../../../../services/api/api.models';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { GapWriteComponent } from '../../../../components/gap-write/gap-write.component';

@Component({
  selector: 'ehh-question-type-three',
  templateUrl: './question-type-three.component.html',
  styleUrls: ['./question-type-three.component.scss']
})
export class QuestionTypeThreeComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, AfterViewInit, OnDestroy {
  @ViewChild('textAndGaps') textAndGaps: ElementRef;
  formGroup: UntypedFormGroup;
  dropAreas: string[] = [];
  optionElementIds: string[] = [];
  options: QuestionOption[];
  gapElementIds: string[] = [];
  private gaps: GapItem[] = [];
  private filledGaps: QuestionOption[] = [];
  private subscriptions$: Subscription[] = [];
  private gapComponents: CreatedEHHComponent[] = [];

  constructor(private exerciseService: ExerciseService) { super(); }

  ngOnInit(): void {
    this.setExerciseInitialStatus();
    this.options = this.exerciseService.setQuestionOptions(this.data.options);
    this.setOptionElementIds();
    this.formGroup = new UntypedFormGroup({});

    const check$ = this.exerciseService.check
      .subscribe(() => { this.checkQuestion(); });
    this.subscriptions$.push(check$);
  }

  private setOptionElementIds(): void {
    for (const option of this.options) {
      const optionElementId = `option${option.id.toString()}`;
      this.optionElementIds.push(optionElementId);
    }
  }

  private setExerciseInitialStatus(): void {
    setTimeout(() => {
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
      this.showFeedback.emit(true);
    });
  }

  ngAfterViewInit(): void {
    this.gaps = this.exerciseService.setGaps(this.textAndGaps);
    this.setGapElementIds();
    for (const gap of this.gaps) {
      const gapControlName = gap.gapControlName;
      this.dropAreas.push(gapControlName);
      this.formGroup.addControl(gapControlName, new UntypedFormControl('', Validators.required));
      const replacerElement = this.exerciseService.getReplacerElement(gap);

      if (this.data.type === 'TYPE3') {
        this.setType3Gaps(gapControlName, replacerElement);
      } else if (this.data.type === 'TYPE31') {
        this.setType31Gaps(gap, replacerElement);
      }
    }
  }

  private setGapElementIds(): void {
    for (const gap of this.gaps) {
      this.gapElementIds.push(gap.gapControlName);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
    this.gapComponents.forEach(gapComponent => gapComponent.componentRef.destroy());
  }

  drop(event: CdkDragDrop<any>): void {
    const initialPosition = event.previousContainer.data[0].dragItemPosition;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const itemData = event.previousContainer.data[0];
      this.removeGapFromFilledGaps(itemData);
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, initialPosition);
    }
  }

  private setType3Gaps(gapControlName: string, replacerElement: HTMLElement): void {
    const gapComponent = this.exerciseService.createEHHComponent('ehh-drop-area', DropAreaComponent);

    gapComponent.componentRef.instance.dropAreaId = gapControlName;
    gapComponent.componentRef.instance.connectedTo = this.optionElementIds;
    const dropArea$ = gapComponent.componentRef.instance.itemArrived.subscribe((arrivedItem: SentItem) => {
      this.addGapToPool(arrivedItem);
    });
    this.subscriptions$.push(dropArea$);
    this.gapComponents.push(gapComponent);
    replacerElement.appendChild(gapComponent.element);
  }

  private setType31Gaps(gap: GapItem, replacerElement: HTMLElement): void {
    const gapComponent = this.exerciseService.createEHHComponent('ehh-gap-write', GapWriteComponent);

    gapComponent.componentRef.instance.dropAreaId = gap.gapControlName;
    gapComponent.componentRef.instance.soundPath = this.data[`etalon_wav_gap${gap.gapNumber}`];
    gapComponent.componentRef.instance.controlName = gap.gapControlName;
    gapComponent.componentRef.instance.formGroup = this.formGroup;
    gapComponent.componentRef.instance.connectedTo = this.optionElementIds;
    gapComponent.componentRef.instance.playAudioAutomatically = this.gaps.length === 1;
    const dropArea$ = gapComponent.componentRef.instance.itemArrived.subscribe((arrivedItem: SentItem) => {
      this.addGapToPool(arrivedItem);
    });
    this.subscriptions$.push(dropArea$);
    this.gapComponents.push(gapComponent);
    replacerElement.appendChild(gapComponent.element);
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

  removeGapFromFilledGaps(itemData: QuestionOption): void {
    const gapIndex = this.filledGaps.findIndex((gap) => gap.id === itemData.id);
    this.filledGaps.splice(gapIndex, 1);
    this.isAllGapsFilled();
  }

  private checkQuestion(): void {
    const questionPassed = this.exerciseService.checkType3Gaps(this.gaps, this.formGroup);
    this.disableGapsDragging();
    this.questionChecked.emit(questionPassed);
  }

  private disableGapsDragging(): void {
    this.gapComponents.forEach((gapComponent) => {
      gapComponent.componentRef.instance.dragDisabled = true;
    });
  }
}
