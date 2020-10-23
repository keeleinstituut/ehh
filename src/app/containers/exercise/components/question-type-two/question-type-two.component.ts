import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-question-type-two',
  templateUrl: './question-type-two.component.html',
  styleUrls: ['./question-type-two.component.scss']
})
export class QuestionTypeTwoComponent implements QuestionComponent, OnInit {
  @Input() data: any;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
