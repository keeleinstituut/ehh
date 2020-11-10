import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';

@Component({
  selector: 'ehh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private sound: SoundService) { }
  @Input() variant = 'primary';
  @Input() size = 'medium';
  @Input() type = 'button';
  @Input() fullWidth = false;
  @Input() disabled;
  @Input() icon: string;
  @Input() audioURL: string;
  @Input() selectable = false;
  @Input() selected = false;
  @Input() contentAlignment = 'center';
  playingSound = false;

  variants = {
    primary: 'button__primary',
    success: 'button__success',
    error: 'button__error',
    plain: 'button__plain',
    white: 'button__white'
  };
  sizes = {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large',
  };
  alignment = {
    left: 'button__content--left',
    center: 'button__content--center',
    right: 'button__content--right',
  };
  fullWidthClass = 'button--full-width';

  @HostListener('click', ['$event.target'])
  async onClick(): Promise <void> {
    await this.handleSoundPlaying();
  }

  private async handleSoundPlaying(): Promise<void> {
    if (this.audioURL?.length && !this.playingSound) {
      await this.playSound();
    } else if (!this.audioURL?.length && this.selectable) {
      this.toggleSelectable();
    }
  }

  ngOnInit(): void {
  }

  async playSound(): Promise<void> {
    this.playingSound = true;

    try {
      const done = await this.sound.getSoundFileAndPlay(this.audioURL);
      if (done) {
        this.sound.sampleSource.addEventListener('ended', () => {
          this.clearStatus();
        });
      } else {
        this.playingSound = false;
      }
    } catch (e) {
      console.error(e);
      this.playingSound = false;
    }
  }

  private clearStatus(): void {
    this.playingSound = false;
    this.toggleSelectable();
    this.sound.clearSampleSource();
  }

  private toggleSelectable(): void {
    if (this.selectable) return;
    this.selected = !!this.selected;
  }
}
