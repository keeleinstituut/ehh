import { Injectable } from '@angular/core';
import { EtLexApiService } from '../../../../services/api/et-lex-api.service';
import { FormGroup } from '@angular/forms';
import { FeedbackBody, FeedbackResponse } from './feedback.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FeedbackService {

  constructor(private apiService: EtLexApiService) { }

  sendFeedback(form: FormGroup): Observable<boolean> {
    const { comments, senderEmail, senderName } = form.value;
    const body: FeedbackBody = {
      comments, senderEmail, senderName,
      feedbackType: 'comment',
      lastSearch: '<hääldusharjutused>',
      word: '<hääldusharjutused>',
    };
    return this.apiService.sendFeedback(body)
      .pipe(map((response) => {
        return this.checkFeedbackStatus(response);
      }));
  }

  private checkFeedbackStatus(response: FeedbackResponse): boolean {
    return response.status === 'ok';
  }
}
