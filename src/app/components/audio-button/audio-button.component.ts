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
  @Input() inlineText: boolean;

  @Input() audioURL: string;
  playingSound = false;

  @HostListener('click', ['$event.target'])
  async onClick(): Promise <void> {
    if (!this.playingSound) await this.playSound();
  }

  constructor(private sound: SoundService) {}

  ngOnInit(): void {}

  async playSound(): Promise<void> {
    this.playingSound = true;

    try {
      await this.sound.getSoundFileAndPlay(this.audioURL);
    } catch (e) {
      console.error(e);
      this.playingSound = false;
    } finally {
      this.sound.sampleSource.addEventListener('ended', () => {
        this.playingSound = false;
        this.sound.clearSampleSource();
      });
    }
  }
}
