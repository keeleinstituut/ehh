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

  playingSound = false;

  @HostListener('click', ['$event.target'])
  async onClick(): Promise <void> {
    await this.playSound();
  }

  constructor(private sound: SoundService) {}

  ngOnInit(): void {}

  async playSound(): Promise<void> {
    this.playingSound = true;

    try{
      await this.sound.getSoundFileAndPlay(this.audioURL);
    } catch (e) {
      console.error(e);
    } finally {
      this.sound.sampleSource.addEventListener('ended', () => {
        this.playingSound = false;
      });
  }
}
}
