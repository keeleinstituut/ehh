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
  @Input() audioURL: string
  active = false;

  @HostListener('click', ['$event.target'])
  onClick(button) {
    this.playAudio(button);
  }

  constructor() {}

  ngOnInit(): void {}

  private async decodeAudio(audioUrl: string): Promise<AudioBuffer> {
    const context = new AudioContext();
    const audioFile = await fetch(this.audioURL);
    const audioBuffer = await audioFile.arrayBuffer();
    return context.decodeAudioData(audioBuffer);
  }

  async playAudio(button): Promise <void> {
    // var button = button.closest('BUTTON')
    // button.classList.add('active')
    // const context = new AudioContext();
    // let audio;

    // await fetch(this.audioURL)
    // .then(response => response.arrayBuffer())
    // .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    // .then(audioBuffer => {
    //   audio = audioBuffer;
    //   play(audio)
    // });

    this.active = true;
    const context = new AudioContext();

    const audioFile = await fetch(this.audioURL);
    const arrayBuffer = await audioFile.arrayBuffer();
    const audioBuffer = context.decodeAudioData(arrayBuffer);

    const source = context.createBufferSource();
    source.buffer = await audioBuffer;
    source.connect(context.destination);
    source.start();
    this.active = false;

    // function play(audioBuffer) {
    //   const source = context.createBufferSource();
    //   source.buffer = audioBuffer;
    //   source.connect(context.destination);
    //   source.start();
    //   // source.addEventListener('ended', () => {
    //   //   button.classList.remove('active')
    //   // });
    // }
  }
}
