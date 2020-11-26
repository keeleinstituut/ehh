import {
  Component,
  OnInit
} from '@angular/core';

import { AudioItem } from '../../../../services/api/api.models';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ehh-topic-two',
  templateUrl: './topic-two.component.html',
  styleUrls: ['./topic-two.component.scss']
})

export class TopicTwoComponent implements OnInit {
  audioMainUrl: string;
  constructor() {
    this.audioMainUrl = environment.audioMainUrl;
  }
  audioItems: AudioItem[] = [{
      title: 'n',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_n_1.wav`
    },
    {
      title: 's',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_s_1.wav`
    },
    {
      title: 'l',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_l_1.wav`
    },
    {
      title: 't/d',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_t_1.wav`
    },
  ];

  audioItems2: AudioItem[] = [{
      title: 'n&apos;',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_n_2.wav`
    },
    {
      title: 's&apos;',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_s_2.wav`
    },
    {
      title: 'l&apos;',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_l_2.wav`
    },
    {
      title: 't&apos;/d&apos;',
      border: true,
      audioURL: `${environment.audioMainUrl}/2_t_2.wav`
    },
  ];

  imageAudioItems: AudioItem[] = [{
      title: 'palk',
      image: `${environment.imageMainUrl}/palk_2.svg`,
      audioURL: `${environment.audioMainUrl}/2_palk_1.wav`
    },
    {
      title: 'palk',
      image: `${environment.imageMainUrl}/palk_1.svg`,
      audioURL: `${environment.audioMainUrl}/2_palk_2.wav`
    },
    {
      title: 'tall',
      image: `${environment.imageMainUrl}/tall_1.svg`,
      audioURL: `${environment.audioMainUrl}/2_tall_1.wav`
    },
    {
      title: 'tall',
      image: `${environment.imageMainUrl}/tall_2.svg `,
      audioURL: `${environment.audioMainUrl}/2_tall_2.wav`
    },
    {
      title: 'kott',
      image: `${environment.imageMainUrl}/kott_2.svg`,
      audioURL: `${environment.audioMainUrl}/2_kott_2.wav`
    },
    {
      title: 'kott',
      image: `${environment.imageMainUrl}/kott_1.svg`,
      audioURL: `${environment.audioMainUrl}/2_kott_1.wav`
    }
  ];

  buttonTitle = `
  <span class='text-underline italic'>
  Võ<span class='bold'>tt</span>is ka<span class='bold'>ll</span>i kassi ja pa<span class='bold'>n</span>i pa<span
    class='bold'>d</span>jale
  </span>`;

  ngOnInit(): void {}

}
