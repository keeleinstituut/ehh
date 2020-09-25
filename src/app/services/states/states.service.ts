import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TopicInfoDto, TopicInfoItem, TopicsDto } from '../api/api.models';

export interface States {
  topicsList: TopicsDto;
  currentTopic: TopicInfoItem;
}

const states = {
  topicsList: [],
  currentTopic: {},
};

@Injectable()
export class StatesService {

  private currentStates: States;

  appStates$: BehaviorSubject<any> = new BehaviorSubject<any>(states);

  constructor() { }

  private getCurrentState(): States {
    return this.appStates$.getValue();
  }

  get appStates(): Observable<States> {
    return this.appStates$.asObservable();
  }

  setTopics(topics: TopicsDto): void {
    this.currentStates = this.getCurrentState();
    this.currentStates.topicsList = topics;
    this.appStates$.next(this.currentStates);
  }

  setTopicInfo(topicInfo: TopicInfoDto): void {
    this.currentStates = this.getCurrentState();
    this.currentStates.currentTopic = topicInfo.item;
    this.appStates$.next(this.currentStates);
  }
}
