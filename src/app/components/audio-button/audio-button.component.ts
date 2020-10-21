import {
  Component,
  Input,
  HostListener,
  OnInit, OnDestroy
} from '@angular/core';
import { EtLexApiService } from '../../services/api/et-lex-api.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ehh-audio-button',
  templateUrl: './audio-button.component.html',
  styleUrls: ['./audio-button.component.scss']
})

export class AudioButtonComponent implements OnInit, OnDestroy {
  @Input() title = '';
  @Input() border = false;
  @Input() audioURL: string;
  active = false;

  @HostListener('click', ['$event.target'])
  async onClick(button): Promise<void> {
    await this.playAudio(button);
  }

  constructor() {}

  ngOnInit(): void {}

  async playAudio(button): Promise <void> {
    this.active = true;
    const context = new AudioContext();

    try {
      const audioFile = await fetch(this.audioURL);
      const arrayBuffer = await audioFile.arrayBuffer();
      const audioBuffer = context.decodeAudioData(arrayBuffer);

      const source = context.createBufferSource();
      source.buffer = await audioBuffer;
      source.connect(context.destination);
      source.start();
    } catch (e) {
      console.error(e);
    } finally {
      this.active = false;
    }

  }
}
