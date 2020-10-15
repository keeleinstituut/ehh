import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  maxSteps = 20;
  currentStep = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
