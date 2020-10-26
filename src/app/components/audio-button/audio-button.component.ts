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
  @Input() inlineText:boolean;

  @Input() audioURL: string;
  active = false;

  @HostListener('click', ['$event.target'])
  async onClick(): Promise <void> {
    await this.playAudio();
  }

  constructor() {}

  ngOnInit(): void {}

  async playAudio(): Promise <void> {
    this.active = true;
    const context = new AudioContext();
    let source;

    try {
      const audioFile = await fetch(this.audioURL);
      const arrayBuffer = await audioFile.arrayBuffer();
      const audioBuffer = context.decodeAudioData(arrayBuffer);

      source = context.createBufferSource();
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
