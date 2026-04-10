import { Component, Input } from '@angular/core';

@Component({
  selector: 'ehh-exercise-audio',
  templateUrl: './exercise-audio.component.html',
  styleUrls: ['./exercise-audio.component.scss'],
  standalone: false,
})
export class ExerciseAudioComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() audioURL = '';

  constructor() {}
}
