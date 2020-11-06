import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { CreatedEHHComponent, ExerciseService } from '../../services/exercise/exercise.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formGroup: FormGroup;
  dropAreas: string[] = [];
  options: QuestionOption[];
  private gaps: GapItem[] = [];
  private filledGaps: QuestionOption[] = [];
  private subscriptions$: Subscription[] = [];
  private gapComponents: CreatedEHHComponent[] = [];

  constructor(private exerciseService: ExerciseService) { super(); }

  ngOnInit(): void {
    // TODO Delete
    console.log(this.data);
    this.setExerciseInitialStatus();

    this.options = this.exerciseService.setQuestionOptions(this.data.options);
    // TODO Delete
    console.log('OPTIONS');
    console.log(this.options);

    this.formGroup = new FormGroup({});

    const check$ = this.exerciseService.check
      .subscribe(() => { this.checkQuestion(); });

    this.subscriptions$.push(check$);
  }

  private setExerciseInitialStatus(): void {
    setTimeout(() => {
      this.readyToCheck.emit(false);
      this.questionChecked.emit(null);
    });
  }

  ngAfterViewInit(): void {
    this.gaps = this.exerciseService.setGaps(this.textAndGaps);

    for (const gap of this.gaps) {
      const gapControlName = gap.gapControlName;
      this.dropAreas.push(gapControlName);
      this.formGroup.addControl(gapControlName, new FormControl('', Validators.required));
      const replacerElement = this.exerciseService.getReplacerElement(gap);

      if (this.data.type === 'TYPE3') {
        this.setType3Gaps(gapControlName, replacerElement);
      } else if (this.data.type === 'TYPE31') {
        this.setType31Gaps(gap, replacerElement);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
    this.gapComponents.forEach(gapComponent => gapComponent.componentRef.destroy());
  }

  drop(event: CdkDragDrop<any>): void {
    console.log('dropped to QuestionTypeThreeComponent');
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

  private removeGapFromFilledGaps(itemData: QuestionOption): void {
    const gapIndex = this.filledGaps.findIndex((gap) => gap.id === itemData.id);
    this.filledGaps.splice(gapIndex, 1);
    this.isAllGapsFilled();
  }

  private checkQuestion(): void {
    const questionPassed = this.exerciseService.checkType3Gaps(this.gaps, this.formGroup);
    this.questionChecked.emit(questionPassed);
  }
}
