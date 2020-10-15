import { Component, Input, OnInit } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-exercise-type-two',
  templateUrl: './exercise-type-two.component.html',
  styleUrls: ['./exercise-type-two.component.scss']
})
export class ExerciseTypeTwoComponent implements QuestionComponent, OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
