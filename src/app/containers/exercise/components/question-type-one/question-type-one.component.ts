import {
  AfterViewInit, ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { QuestionBasicComponent, QuestionComponent } from '../question.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { ReplacerComponent } from '../../../../components/replacer/replacer.component';
import { GapWriteComponent } from '../../../../components/gap-write/gap-write.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ehh-question-type-one',
  templateUrl: './question-type-one.component.html',
  styleUrls: ['./question-type-one.component.scss']
})
export class QuestionTypeOneComponent extends
  QuestionBasicComponent implements QuestionComponent, OnInit, AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('from_field') fromField: ElementRef;
  formGroup: FormGroup;
  private gapIds: string[] = [];

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

    this.formGroup = new FormGroup({
      gap1: new FormControl(''),
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  checkQuestion(): void {
    console.log('Kontrollin TYPE1 küsimust');
    this.questionChecked.emit(false);
    const test = this.formGroup.controls.gap1.value;
    console.log(test);
  }

  ngAfterViewInit(): void {
    const element = this.fromField.nativeElement;
    const preFormattedText = element.textContent;
    element.innerHTML = this.getFormattedText(preFormattedText);

    console.log(this.gapIds);
    const el: HTMLElement = document.getElementById('replacer_1');
    const gapWrite = document.createElement('ehh-gap-write');
    const factory = this.componentFactoryResolver.resolveComponentFactory(GapWriteComponent);
    const gapWriteComponentRef = factory.create(this.injector, [], gapWrite);
    this.applicationRef.attachView(gapWriteComponentRef.hostView);
    gapWriteComponentRef.instance.soundPath = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3';
    gapWriteComponentRef.instance.controlName = 'gap1';
    gapWriteComponentRef.instance.formGroup = this.formGroup;
    el.appendChild(gapWrite);
  }

  getFormattedText(text): any {
    const parts = text.split(/(\b__[0-9]__+\b)/gi);
    console.log(parts);
    for (let i = 1; i < parts.length; i += 2) {
      this.setGapIds(parts[i]);
      parts[i] = `<span id="replacer_${i}"></span>`;
    }
    return parts.join('');
  }

  private setGapIds(gapString: string): void {
    const gapId = gapString.split('__')[1];
    this.gapIds.push(gapId);
  }

}
