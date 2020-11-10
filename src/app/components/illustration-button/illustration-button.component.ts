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

  constructor(private sound: SoundService) {}
  @Input() title: string;
  @Input() image: string;
  @Input() audioURL: string;
  @Input() selectable = false;
  @Input() selected = false;
  playingSound = false;

  @HostListener('click', ['$event'])
  async onClick(): Promise <void> {
    await this.handleSoundPlaying();
  }

  ngOnInit(): void {}

  private async handleSoundPlaying(): Promise<void> {
    if (this.audioURL?.length && !this.playingSound) {
      await this.playSound();
    } else if (!this.audioURL?.length && this.selectable) {
      this.toggleSelectable();
    }
  }

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
        this.toggleSelectable();
        this.sound.clearSampleSource();
      });
    }
  }

  private toggleSelectable(): void {
    if (this.selectable && this.audioURL?.length) return;
    if (!this.selectable) {
      this.selected = false;
      return;
    }
    this.selected = !this.selected;
  }
}
