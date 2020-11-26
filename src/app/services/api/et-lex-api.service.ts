import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseQuestions, QuestionDto, TopicInfoDto, TopicsDto } from './api.models';
import { environment } from '../../../environments/environment';

@Injectable()
export class EtLexApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  fetchTopics(): Observable<TopicsDto> {
    const url = `${this.baseUrl}/pron/topics`;
    return this.http.get<TopicsDto>(url);
  }

  fetchTopicInfo(topicId: number): Observable<TopicInfoDto> {
    const url = `${this.baseUrl}/pron/topics/${topicId}`;
    return this.http.get<TopicInfoDto>(url);
  }

  fetchExerciseQuestions(topicId: number, exerciseId: number): Observable<ExerciseQuestions> {
    const url = `${this.baseUrl}/pron/topics/${topicId}/exercises/${exerciseId}/questions`;
    return this.http.get<ExerciseQuestions>(url);
  }

  fetchQuestion(topicId: number, exerciseId: number, questionId: number): Observable<QuestionDto> {
    const url = `${this.baseUrl}/pron/topics/${topicId}/exercises/${exerciseId}/questions/${questionId}`;
    return this.http.get<QuestionDto>(url);
  }

}
