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
  @Output() showFeedback: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() questionChecked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() readyToCheck: EventEmitter<boolean> = new EventEmitter<boolean>();
  subscription: Subscription;
}
