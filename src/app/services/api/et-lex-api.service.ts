import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopicInfoDto, TopicsDto } from './api.models';
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

}
