import {
  Component,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

import { SoundService } from '../../services/sound/sound.service';

@Component({
  selector: 'ehh-illustration-button',
  templateUrl: './illustration-button.component.html',
  styleUrls: ['./illustration-button.component.scss']
})
export class IllustrationButtonComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() imageLocation = 'assets/img/';
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
