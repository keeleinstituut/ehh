import { Component, Input, OnInit } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';

@Component({
  selector: 'ehh-gap-write',
  templateUrl: './gap-write.component.html',
  styleUrls: ['./gap-write.component.scss']
})
export class GapWriteComponent implements OnInit {
  @Input() soundPath: string;

  constructor(private sound: SoundService) { }

  ngOnInit(): void {
  }

  async playSound(): Promise<void> {
    const audioContext = new AudioContext();
    const audioBuffer = await this.sound.getSoundFile(audioContext, this.soundPath);
    this.sound.playSound(audioContext, audioBuffer);
  }
}
