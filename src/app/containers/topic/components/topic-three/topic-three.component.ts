import { Component } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ehh-topic-three',
  templateUrl: './topic-three.component.html',
  styleUrls: ['./topic-three.component.scss'],
  standalone: false,
})
export class TopicThreeComponent {
  audioMainUrl: string;
  constructor() {
    this.audioMainUrl = environment.audioMainUrl;
  }
}
