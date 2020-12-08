import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseQuestions, QuestionDto, TopicInfoDto, TopicsDto } from './api.models';
import { environment } from '../../../environments/environment';
import { FeedbackBody, FeedbackResponse } from '../../containers/feedback/services/feedback/feedback.model';

@Injectable()
export class EtLexApiService {
  baseUrl: string;
  private readonly feedbackHost: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.feedbackHost = environment.feedbackHost;
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

  exerciseDone(topicId: number, exerciseId: number): Observable<string> {
    const url = `${this.baseUrl}/pron/topics/${topicId}/exercises/${exerciseId}/done`;
    return this.http.get(url, { responseType: 'text' });
  }

  questionRight(topicId: number, exerciseId: number, questionId: number): Observable<string> {
    const url = `${this.baseUrl}/pron/topics/${topicId}/exercises/${exerciseId}/questions/${questionId}/correct`;
    return this.http.get(url, { responseType: 'text' });
  }

  questionWrong(topicId: number, exerciseId: number, questionId: number): Observable<string> {
    const url = `${this.baseUrl}/pron/topics/${topicId}/exercises/${exerciseId}/questions/${questionId}/false`;
    return this.http.get(url, { responseType: 'text' });
  }
  sendFeedback(body: FeedbackBody): Observable<FeedbackResponse> {
    const url = `${this.feedbackHost}/send_feedback`;
    return this.http.post<FeedbackResponse>(url, body);
  }
}
