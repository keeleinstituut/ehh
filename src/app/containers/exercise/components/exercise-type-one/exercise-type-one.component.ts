import { Component, Input, OnInit } from '@angular/core';
import { QuestionComponent } from '../question.component';

@Component({
  selector: 'ehh-exercise-type-one',
  templateUrl: './exercise-type-one.component.html',
  styleUrls: ['./exercise-type-one.component.scss']
})
export class ExerciseTypeOneComponent implements QuestionComponent, OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
