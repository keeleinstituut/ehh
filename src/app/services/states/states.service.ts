import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExerciseQuestions, QuestionDto, TopicInfoDto, TopicInfoItem, TopicsDto } from '../api/api.models';

export interface States {
  topicsList: TopicsDto;
  currentTopic: TopicInfoItem;
  topicColors: string[];
  currentQuestions: ExerciseQuestions;
  currentQuestion: QuestionDto;
}

const states = {
  topicsList: [],
  currentTopic: {},
  topicColors: ['#EADFE7', '#E5E1F5', '#E3E6FF', '#E1F4F7', '#F6E7CE', '#FDF1CC', '#E1EAD7', '#F3F6E4', '#FEE0E0', '#FFE9F9'],
};

@Injectable()
export class StatesService {

  private currentStates: States;

  appStates$: BehaviorSubject<any> = new BehaviorSubject<any>(states);
  currentQuestions$: BehaviorSubject<ExerciseQuestions> = new BehaviorSubject<ExerciseQuestions>(null);
  question$: BehaviorSubject<QuestionDto> = new BehaviorSubject<QuestionDto>(null);

  constructor() { }

  private getCurrentState(): States {
    return this.appStates$.getValue();
  }

  get appStates(): Observable<States> {
    return this.appStates$.asObservable();
  }

  get currentQuestions(): Observable<ExerciseQuestions> {
    return this.currentQuestions$.asObservable();
  }

  get question(): Observable<QuestionDto> {
    return this.question$.asObservable();
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

  setCurrentQuestions(questions: ExerciseQuestions): void {
    this.currentQuestions$.next(questions);
  }

  setCurrentQuestion(question: QuestionDto): void {
    this.question$.next(question);
  }
}
