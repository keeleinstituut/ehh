import {
  Component, Input,
  OnInit
} from '@angular/core';
import { AudioItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-audio-image-list-three',
  templateUrl: './audio-image-list-three.component.html',
  styleUrls: ['./audio-image-list-three.component.scss']
})
export class AudioImageListThreeComponent implements OnInit {
  @Input() audioItems: AudioItem[];

  constructor() {}

  ngOnInit(): void {}

}
