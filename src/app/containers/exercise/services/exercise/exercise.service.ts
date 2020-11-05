import { ElementRef, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuestionOption } from '../../../../services/api/api.models';
import { decode } from 'js-base64';
import { GapItem } from './exercise.models';

@Injectable()
export class ExerciseService {
  check$: Subject<any> = new Subject();
  private checkValue = false;

  constructor() { }

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

  getFormattedText(text): string {
    const parts = this.getEtalonTextParts(text);
    for (let i = 1; i < parts.length; i += 2) {
      parts[i] = `<span id="replacer_${i}"></span>`;
    }
    return parts.join('');
  }

  setGapItems(text: string): GapItem[] {
    const gaps: GapItem[] = [];
    const parts = this.getEtalonTextParts(text);
    for (let i = 1; i < parts.length; i += 2) {
      const gapIdString = parts[i].split('__')[1];
      const gapNumber =  parseInt(gapIdString, 10);
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
    return decodedOptions.map((option, index) => ({...option, dragItemPosition: index}));
  }

  setGaps(elementRef: ElementRef): GapItem[] {
    const nativeElement = elementRef.nativeElement;
    const preFormattedText = nativeElement.textContent;
    nativeElement.innerHTML = this.getFormattedText(preFormattedText);
    return this.setGapItems(preFormattedText);
  }
}
