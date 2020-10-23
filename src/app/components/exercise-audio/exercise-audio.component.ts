import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-exercise-audio',
  templateUrl: './exercise-audio.component.html',
  styleUrls: ['./exercise-audio.component.scss']
})
export class ExerciseAudioComponent implements OnInit {
  @Input() title:string = '';
  @Input() image:string = '';
  @Input() audioURL:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
