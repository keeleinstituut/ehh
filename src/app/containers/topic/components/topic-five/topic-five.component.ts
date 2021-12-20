import {
  Component,
  OnInit
} from '@angular/core';

import { AudioItem } from '../../../../services/api/api.models';
import { environment } from '../../../../../environments/environment';
import { WordsList } from '../../../../components/words-list/words-list.component';

@Component({
  selector: 'ehh-topic-five',
  templateUrl: './topic-five.component.html',
  styleUrls: ['./topic-five.component.scss']
})

export class TopicFiveComponent implements OnInit {
  audioMainUrl: string;
  constructor() {
    this.audioMainUrl = environment.audioMainUrl;
  }

  imageAudioItems: AudioItem[] = [{
      title: '',
      image: `${environment.imageMainUrl}/s_kalu.svg`,
      audioURL: `${environment.audioMainUrl}/kalu.wav`
    },
    {
      title: '',
      image: `${environment.imageMainUrl}/s_pala.svg`,
      audioURL: `${environment.audioMainUrl}/pala.wav`
    },
    {
      title: '',
      image: `${environment.imageMainUrl}/s_lina.svg`,
      audioURL: `${environment.audioMainUrl}/lina.wav`
    },
  ];

  imageAudioItems2: AudioItem[] = [{
      title: '',
      image: `${environment.imageMainUrl}/s_kaalu_2.svg`,
      audioURL: `${environment.audioMainUrl}/kaalu_2.wav`
      },
      {
        title: '',
        image: `${environment.imageMainUrl}/s_paela_2.svg`,
        audioURL: `${environment.audioMainUrl}/paela_2.wav`
      },
      {
        title: '',
        image: `${environment.imageMainUrl}/s_linna_2.svg`,
        audioURL: `${environment.audioMainUrl}/linna_2.wav`
      },
    ];

    imageAudioItems3: AudioItem[] = [{
        title: '',
        image: `${environment.imageMainUrl}/s_kaalu_3.svg `,
        audioURL: `${environment.audioMainUrl}/kaalu_3.wav`
      },
      {
        title: '',
        image: `${environment.imageMainUrl}/s_paela_3.svg`,
        audioURL: `${environment.audioMainUrl}/paela_3.wav`
      },
      {
        title: '',
        image: `${environment.imageMainUrl}/s_linna_3.svg`,
        audioURL: `${environment.audioMainUrl}/linna_3.wav`
      }
    ];

  ngOnInit(): void {}

}
