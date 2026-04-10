import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Injectable,
  Injector,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuestionOption } from '../../../../services/api/api.models';
import { decode } from 'js-base64';
import { GapItem } from './exercise.models';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SoundService } from '../../../../services/sound/sound.service';

export interface CreatedEHHComponent {
  element: HTMLElement;
  componentRef: ComponentRef<any>;
}

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  check$ = new Subject<any>();
  private checkValue = false;

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private sound: SoundService,
  ) {}

  get check(): Observable<any> {
    return this.check$.asObservable();
  }

  checkQuestion(): void {
    this.check$.next(this.checkValue);
  }

  decodeQuestionOptions(optionsBase64: string): QuestionOption[] {
    return JSON.parse(decode(optionsBase64));
  }

  private getEtalonTextParts(text: string): string[] {
    return text.split(/(__[0-9]__)/gi);
  }

  setGapItems(text: string): GapItem[] {
    const gaps: GapItem[] = [];
    const parts = this.getEtalonTextParts(text);
    for (let i = 1; i < parts.length; i += 2) {
      const gapIdString = parts[i].split('__')[1];
      const gapNumber = parseInt(gapIdString, 10);
      const gapControlName = `gapControl${i}`;
      const gap: GapItem = { gapNumber, gapId: i, gapControlName };
      gaps.push(gap);
    }
    return gaps;
  }

  trimGapValue(value: string): string {
    return value.trim().toLowerCase();
  }

  getReplacerElement(gap: GapItem): HTMLElement {
    const elementId = `replacer_${gap.gapId}`;
    return document.getElementById(elementId);
  }

  setQuestionOptions(encodedOptions: string): QuestionOption[] {
    const decodedOptions = this.decodeQuestionOptions(encodedOptions);
    return decodedOptions.map((option, index) => ({ ...option, dragItemPosition: index }));
  }

  setGaps(elementRef: ElementRef): GapItem[] {
    const nativeElement: HTMLElement = elementRef.nativeElement;
    const preFormattedText = nativeElement.textContent ?? '';
    const parts = this.getEtalonTextParts(preFormattedText);

    nativeElement.textContent = '';
    for (let i = 0; i < parts.length; i += 1) {
      if (i % 2 === 1) {
        const replacer = document.createElement('span');
        replacer.id = `replacer_${i}`;
        nativeElement.appendChild(replacer);
        continue;
      }

      nativeElement.appendChild(document.createTextNode(parts[i].trim()));
    }

    return this.setGapItems(preFormattedText);
  }

  createEHHComponent(tagName: string, component: any): CreatedEHHComponent {
    const gapWrite = document.createElement(tagName);
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const gapWriteComponentRef = factory.create(this.injector, [], gapWrite);
    this.applicationRef.attachView(gapWriteComponentRef.hostView);
    return { element: gapWrite, componentRef: gapWriteComponentRef };
  }

  checkType3Gaps(gaps: GapItem[], formGroup: UntypedFormGroup): boolean {
    const gapsAnswers: boolean[] = [];
    const formControls: UntypedFormControl = formGroup.value;
    gaps.forEach((gap) => {
      if (formControls[gap.gapControlName].gap_nr === gap.gapNumber) {
        gapsAnswers.push(true);
      }
    });
    return gapsAnswers.length === gaps.length;
  }

  async playEtalonSound(audioUrl: string): Promise<void> {
    await this.sound.playAudio(audioUrl);
  }
}
