import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopicsDto } from './api.models';

const baseUrl = 'etLex/api/v1.0';

@Injectable()
export class EtLexApiService {

  constructor(private http: HttpClient) { }

  fetchTopics(): Observable<TopicsDto> {
    const url = `${baseUrl}/pron/topics`;
    return this.http.get<TopicsDto>(url);
  }

}
