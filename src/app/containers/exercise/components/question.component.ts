import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../services/api/api.models';
import { Subscription } from 'rxjs';

export interface QuestionComponent {
  data: any;
  event?: any;
  questionChecked?: EventEmitter<any>;
  readyToCheck?: EventEmitter<any>;
  showFeedback?: EventEmitter<any>;
}

@Component({
  selector: 'ehh-question',
  template: ''
})
export class QuestionBasicComponent {
  @Input() data: Question;
  @Output() showFeedback: EventEmitter<any> = new EventEmitter<any>();
  @Output() questionChecked: EventEmitter<any> = new EventEmitter<any>();
  @Output() readyToCheck: EventEmitter<any> = new EventEmitter<any>();
  subscription: Subscription;
}
