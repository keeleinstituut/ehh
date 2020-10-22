import {
  Component,
  Input,
  HostListener,
  OnInit
} from '@angular/core';


@Component({
  selector: 'ehh-audio-button',
  templateUrl: './audio-button.component.html',
  styleUrls: ['./audio-button.component.scss']
})

export class AudioButtonComponent implements OnInit {
  @Input() title = '';
  @Input() border = false;
  @Input() audioURL: string;
  active: boolean = false;

  @HostListener('click', ['$event.target'])
  async onClick(button): Promise < void > {
    this.playAudio(button);
  }

  constructor() {}

  ngOnInit(): void {}

  async playAudio(button): Promise < void > {
    this.active = true;
    const context = new AudioContext();
    const source = context.createBufferSource();

    try {
      const audioFile = await fetch(this.audioURL);
      const arrayBuffer = await audioFile.arrayBuffer();
      const audioBuffer = context.decodeAudioData(arrayBuffer);

      source.buffer = await audioBuffer;
      source.connect(context.destination);
      source.start();
    } catch (e) {
      console.error(e);
    } finally {
      source.addEventListener('ended', () => {
        this.active = false;
      });
    }

  }
}
