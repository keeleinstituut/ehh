import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';
import { environment } from '../../../environments/environment';

enum LetterSounds {
  Y = 'y',
  SEVEN = '7',
  SIX = '6',
  X = 'x',
  I = 'i',
  E = 'e',
  U = 'u',
  O = 'o',
  A = 'a'
}

@Component({
    selector: 'ehh-vocal-trapeze',
    templateUrl: './vocal-trapeze.component.html',
    styleUrls: ['./vocal-trapeze.component.scss'],
    standalone: false
})
export class VocalTrapezeComponent implements OnInit {
  letterSounds = {
    y: `${environment.audioMainUrl}/1_y.wav`,
    7: `${environment.audioMainUrl}/1_7.wav`,
    6: `${environment.audioMainUrl}/1_6.wav`,
    x: `${environment.audioMainUrl}/1_x.wav`,
    i: `${environment.audioMainUrl}/1_i.wav`,
    e: `${environment.audioMainUrl}/1_e.wav`,
    u: `${environment.audioMainUrl}/1_u.wav`,
    o: `${environment.audioMainUrl}/1_o.wav`,
    a: `${environment.audioMainUrl}/1_a.wav`,
  };
  constructor(private sound: SoundService) { }

  ngOnInit(): void {
  }

  async playSound(letterSound: string): Promise<void> {
    await this.sound.playAudio(this.letterSounds[letterSound]);
  }
}
