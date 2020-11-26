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
  animate = false;

  @HostListener('click', ['$event'])
  async onClick(): Promise <void> {
    await this.handleSoundPlaying();
  }

  ngOnInit(): void {}

  private async handleSoundPlaying(): Promise<void> {
    if (this.audioURL?.length && !this.playingSound) {
      await this.playAudio();
    } else if (!this.audioURL?.length && this.selectable) {
      this.toggleSelectable();
    }
  }

  private clearStatus(): void {
    this.playingSound = false;
    this.animate = false;
    this.toggleSelectable();
  }

  private toggleSelectable(): void {
    if (this.selectable && this.audioURL?.length) return;
    if (!this.selectable) {
      this.selected = false;
      return;
    }
    this.selected = !this.selected;
  }

  private async playAudio(): Promise<void> {
    this.playingSound = !this.selectable && this.selected;
    this.animate = true;
    const sound = await this.sound.playAudio(this.audioURL);
    sound.on('end', () => {
      this.clearStatus();
    });
    sound.on('loaderror', () => {
      this.clearStatus();
    });
  }
}
