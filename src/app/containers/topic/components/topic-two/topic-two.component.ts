import {
  Component,
  OnInit
} from '@angular/core';

import {
  AudioItem
} from '../../../../services/api/api.models';

@Component({
  selector: 'ehh-topic-two',
  templateUrl: './topic-two.component.html',
  styleUrls: ['./topic-two.component.scss']
})

export class TopicTwoComponent implements OnInit {
  audioItems: AudioItem[] = [{
      title: 'n',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
    {
      title: 's',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
    {
      title: 't',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
    {
      title: 't/d',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
  ];

  audioItems2: AudioItem[] = [{
      title: 'n',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
    {
      title: 's',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
    {
      title: 't',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
    {
      title: 't/d',
      border: true,
      audioURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3'
    },
  ];

  buttonTitle = `
  <span class='text-underline italic'>
  Võ<span class='bold'>tt</span>is ka<span class='bold'>ll</span>i kassi ja pa<span class='bold'>n</span>i pa<span
    class='bold'>d</span>jale
  </span>
  `;

  buttonTitle2 = `<span class='text-underline'>esineb</span>`;

  constructor() {}

  ngOnInit(): void {}

}
