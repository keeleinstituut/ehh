import { Component, Input } from '@angular/core';
import { AudioItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-audio-button-list',
  templateUrl: './audio-button-list.component.html',
  styleUrls: ['./audio-button-list.component.scss'],
  standalone: false,
})
export class AudioButtonListComponent {
  @Input() list: AudioItem[];

  constructor() {}
}
