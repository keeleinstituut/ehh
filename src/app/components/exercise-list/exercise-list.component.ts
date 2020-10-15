import { Component, Input, OnInit } from '@angular/core';
import { TopicExercise } from '../../services/api/api.models';
import { Router } from '@angular/router';

@Component({
  selector: 'ehh-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  @Input() exercises: TopicExercise[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openExercise(id: number): void {

  }
}
