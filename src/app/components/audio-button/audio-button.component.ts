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

  @HostListener('click', ['$event.target'])
  onClick(button) {
    this.playAudio(button);
  }

  constructor() {}

  ngOnInit(): void {}

  async playAudio(button): Promise < void > {
    var button = button.closest('BUTTON')
    button.classList.add('active')
    let context = new AudioContext();
    let audio;

    await fetch(this.audioURL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      audio = audioBuffer;
      play(audio)
    });

    function play(audioBuffer) {
      const source = context.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(context.destination);
      source.start();
      source.addEventListener('ended', () => {
        button.classList.remove('active')
      });
    }
  }
}
