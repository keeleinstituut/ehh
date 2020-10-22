import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
}
