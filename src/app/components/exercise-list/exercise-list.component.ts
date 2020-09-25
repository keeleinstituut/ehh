import { Component, Input, OnInit } from '@angular/core';
import { TopicExercise } from '../../services/api/api.models';

@Component({
  selector: 'ehh-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  @Input() exercises: TopicExercise[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
