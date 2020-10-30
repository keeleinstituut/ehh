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
  @Input() audioURL: string;
  active = false;

  @HostListener('click', ['$event.target'])
  async onClick(): Promise <void> {
    await this.playSound();
  }

  constructor(private sound: SoundService) {}

  ngOnInit(): void {}

  async playSound(): Promise<void> {
    try {
      this.active = true;
      await this.sound.getSoundFileAndPlay(this.audioURL);
    } catch (error) {
      console.error(error);
    } finally {
      this.sound.sampleSource.addEventListener('ended', () => {
        this.active = false;
      });
    }
  }
}
