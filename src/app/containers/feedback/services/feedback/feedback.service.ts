import { Injectable } from '@angular/core';
import { EtLexApiService } from '../../../../services/api/et-lex-api.service';
import { UntypedFormGroup } from '@angular/forms';
import { FeedbackBody, FeedbackResponse } from './feedback.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FeedbackService {

  constructor(private apiService: EtLexApiService) { }

  sendFeedback(form: UntypedFormGroup): Observable<boolean> {
    const { description, senderEmail, senderName } = form.value;
    const body: FeedbackBody = {
      description, senderEmail, senderName,
      feedbackType: 'väline',
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
