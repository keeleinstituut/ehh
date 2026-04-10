import { Component, Input } from '@angular/core';
import { AudioItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-audio-image-list',
  templateUrl: './audio-image-list.component.html',
  styleUrls: ['./audio-image-list.component.scss'],
  standalone: false,
})
export class AudioImageListComponent {
  @Input() audioItems: AudioItem[];

  constructor() {}
}
