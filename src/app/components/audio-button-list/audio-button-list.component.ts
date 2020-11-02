import { Component, OnInit , Input} from '@angular/core';
import { AudioItem } from '../../services/api/api.models';

@Component({
  selector: 'ehh-audio-button-list',
  templateUrl: './audio-button-list.component.html',
  styleUrls: ['./audio-button-list.component.scss']
})
export class AudioButtonListComponent implements OnInit {

  @Input() list: AudioItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
