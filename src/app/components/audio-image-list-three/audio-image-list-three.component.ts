import { Component, Input } from '@angular/core';
import { AudioItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-audio-image-list-three',
  templateUrl: './audio-image-list-three.component.html',
  styleUrls: ['./audio-image-list-three.component.scss'],
  standalone: false,
})
export class AudioImageListThreeComponent {
  @Input() audioItems: AudioItem[];

  constructor() {}
}
