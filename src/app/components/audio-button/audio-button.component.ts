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
    if (this.audioURL?.length &&  !this.playingSound) await this.playAudio();
  }

  constructor(private sound: SoundService) {}

  ngOnInit(): void {}

  async playSound(): Promise<void> {
    this.playingSound = true;

    try {
      const played = await this.sound.getSoundFileAndPlay(this.audioURL);
      if (played) {
        this.sound.sampleSource.addEventListener('ended', () => {
          this.clearStatus();
        });
      }
    } catch (e) {
      console.error(e);
      this.playingSound = false;
    }
  }


  private clearStatus(): void {
    this.playingSound = false;
    // this.sound.clearSampleSource();
  }

  private async playAudio(): Promise<void> {
    this.playingSound = true;
    const sound = await this.sound.playAudio(this.audioURL);
    sound.on('end', () => {
      this.clearStatus();
    });
  }
}
