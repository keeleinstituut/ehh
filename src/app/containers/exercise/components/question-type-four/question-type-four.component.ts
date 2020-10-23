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
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { GapWriteComponent } from '../../../../components/gap-write/gap-write.component';

interface GapItem {
  gapId: number;
  gapNumber: number;
}

@Component({
  selector: 'ehh-question-type-four',
  templateUrl: './question-type-four.component.html',
  styleUrls: ['./question-type-four.component.scss']
})
export class QuestionTypeFourComponent extends QuestionBasicComponent implements QuestionComponent, OnInit, AfterViewInit, OnDestroy {
  @ViewChild('textAndGaps') textAndGaps: ElementRef;
  formGroup: FormGroup;
  private gapIds: GapItem[] = [];

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

    for (const gap of this.gapIds) {
      // Add gap control to form group
      const gapControlName = `gapControl${gap.gapId}`;
      this.formGroup.addControl(gapControlName, new FormControl(''));

      // Get element by ID where ehh-gap-write is inserted
      const elementId = `replacer_${gap.gapId}`;
      const el: HTMLElement = document.getElementById(elementId);

      // Use componentFactoryResolver to add ehh-gap-write component to template
      const gapWrite = document.createElement('ehh-gap-write');
      const factory = this.componentFactoryResolver.resolveComponentFactory(GapWriteComponent);
      const gapWriteComponentRef = factory.create(this.injector, [], gapWrite);
      this.applicationRef.attachView(gapWriteComponentRef.hostView);

      // Define ehh-gap-write component variables and form control
      gapWriteComponentRef.instance.soundPath = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3';
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
    const gap = { gapNumber, gapId };
    this.gapIds.push(gap);
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE4 küsimust');
    this.questionChecked.emit(true);
  }

}
