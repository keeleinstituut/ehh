import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'etLex/api/v1.0';

@Injectable()
export class EtLexApiService {

  constructor(private http: HttpClient) { }

  getTopics(): Observable<any> {
    const url = `${baseUrl}/pron/topics`;
    return this.http.get(url);
  }

}
