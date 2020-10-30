import {
  Component,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

import { SoundService } from '../../services/sound/sound.service';

@Component({
  selector: 'ehh-audio-button',
  templateUrl: './audio-button.component.html',
  styleUrls: ['./audio-button.component.scss']
})

export class AudioButtonComponent implements OnInit {
  @Input() title = '';
  @Input() border = false;
  @Input() inlineText:boolean;

  @Input() audioURL: string;
  active = false;

  @HostListener('click', ['$event.target'])
  async onClick(): Promise <void> {
    await this.playSound();
  }

  constructor(private sound: SoundService) {}

  ngOnInit(): void {}

  async playSound(): Promise<void> {
    this.active = true;

    try{
      const audioContext = new AudioContext();
      const audioBuffer = await this.sound.getSoundFile(audioContext, this.audioURL);
      this.sound.playSound(audioContext, audioBuffer);
    } catch (e) {
      console.error(e);
    } finally {
      this.sound.sampleSource.addEventListener('ended', () => {
        this.active = false;
      });
  }
}
}
