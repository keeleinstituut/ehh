import {
  Component,
  OnInit
} from '@angular/core';

import { AudioItem } from '../../../../services/api/api.models';
import { environment } from '../../../../../environments/environment';
import { WordsList } from '../../../../components/words-list/words-list.component';

@Component({
    selector: 'ehh-topic-six',
    templateUrl: './topic-six.component.html',
    styleUrls: ['./topic-six.component.scss'],
    standalone: false
})

export class TopicSixComponent implements OnInit {
  audioMainUrl: string;
  constructor() {
    this.audioMainUrl = environment.audioMainUrl;
  }

  imageAudioItems: AudioItem[] = [{
      title: '<b>b</b>uss',
      image: `${environment.imageMainUrl}/buss.svg`,
      audioURL: `${environment.audioMainUrl}/buss.wav`
    },
    {
      title: '<b>p</b>uss',
      image: `${environment.imageMainUrl}/puss.svg`,
      audioURL: `${environment.audioMainUrl}/puss.wav`
    },
    {
      title: '<b>g</b>aas',
      image: `${environment.imageMainUrl}/gaas.svg`,
      audioURL: `${environment.audioMainUrl}/gaas.wav`
    },
    {
      title: '<b>k</b>aas',
      image: `${environment.imageMainUrl}/kaas.svg `,
      audioURL: `${environment.audioMainUrl}/kaas.wav`
    },
    {
      title: '<b>b</b>all',
      image: `${environment.imageMainUrl}/ball.svg`,
      audioURL: `${environment.audioMainUrl}/ball.wav`
    },
    {
      title: '<b>p</b>all',
      image: `${environment.imageMainUrl}/pall.svg`,
      audioURL: `${environment.audioMainUrl}/pall.wav`
    }
  ];

  imageAudioItems2: AudioItem[] = [{
      title: 'kur<b>g</b>',
      image: `${environment.imageMainUrl}/kurg.svg`,
      audioURL: `${environment.audioMainUrl}/kurg.wav`
    },
    {
      title: 'kur<b>k</b>',
      image: `${environment.imageMainUrl}/kurk.svg`,
      audioURL: `${environment.audioMainUrl}/kurk.wav`
    },
    {
      title: 'sil<b>d</b>',
      image: `${environment.imageMainUrl}/sild.svg`,
      audioURL: `${environment.audioMainUrl}/sild.wav`
    },
    {
      title: 'sil<b>t</b>',
      image: `${environment.imageMainUrl}/silt.svg `,
      audioURL: `${environment.audioMainUrl}/silt.wav`
    },
    {
      title: 'ti<b>b</b>u',
      image: `${environment.imageMainUrl}/tibu.svg`,
      audioURL: `${environment.audioMainUrl}/tibu.wav`
    },
    {
      title: 'ti<b>p</b>u',
      image: `${environment.imageMainUrl}/mxed.svg`,
      audioURL: `${environment.audioMainUrl}/tipu.wav`
    }
  ];

  ngOnInit(): void {}

}
