import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';

@Component({
  selector: 'ehh-vocal-trapeze',
  templateUrl: './vocal-trapeze.component.html',
  styleUrls: ['./vocal-trapeze.component.scss']
})
export class VocalTrapezeComponent implements OnInit {

  constructor(private sound: SoundService) { }

  ngOnInit(): void {
  }

  async playSound(): Promise<void> {

  }
}
