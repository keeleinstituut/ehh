import { EventEmitter } from '@angular/core';

export interface QuestionComponent {
  data: any;
  event?: any;
  questionChecked?: EventEmitter<any>;
}
