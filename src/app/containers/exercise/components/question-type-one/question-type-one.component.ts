import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-question-type-one',
  templateUrl: './question-type-one.component.html',
  styleUrls: ['./question-type-one.component.scss']
})
export class QuestionTypeOneComponent implements QuestionComponent, OnInit {
  @Input() data: any;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
