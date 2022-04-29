import {
  Component,
  OnInit
} from '@angular/core';

import { AudioItem } from '../../../../services/api/api.models';
import { environment } from '../../../../../environments/environment';
import { WordsList } from '../../../../components/words-list/words-list.component';

@Component({
  selector: 'ehh-topic-three',
  templateUrl: './topic-three.component.html',
  styleUrls: ['./topic-three.component.scss']
})

export class TopicThreeComponent implements OnInit {
  audioMainUrl: string;
  constructor() {
    this.audioMainUrl = environment.audioMainUrl;
  }
  ngOnInit(): void {}

}
