import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuestionOption } from '../../../../services/api/api.models';
import { decode } from 'js-base64';

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
}
