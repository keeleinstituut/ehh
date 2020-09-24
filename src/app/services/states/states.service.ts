import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TopicsDto } from '../api/api.models';

@Injectable()
export class StatesService {

  topics$: BehaviorSubject<TopicsDto> = new BehaviorSubject<TopicsDto>(null);

  constructor() { }

  setTopics(topics: any): void {
    this.topics$.next(topics);
  }

  get topics(): Observable<TopicsDto> {
    return this.topics$.asObservable();
  }

}
