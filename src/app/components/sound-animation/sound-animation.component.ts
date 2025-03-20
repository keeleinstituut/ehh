import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'ehh-sound-animation',
    templateUrl: './sound-animation.component.html',
    styleUrls: ['./sound-animation.component.scss'],
    standalone: false
})
export class SoundAnimationComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() animation = false;
  @ViewChild('speaker') speaker: ElementRef;
  private waves: HTMLElement[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const speakerElement = this.speaker.nativeElement;
    this.waves = speakerElement.querySelectorAll('.speaker__wave');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.animation.currentValue) this.animate();
  }

  private animate(): void {
    if (this.waves?.length) {
      this.waves.forEach((wave) => {
        wave.classList.add('speaker__wave--unset');
      });
    }

    let i = 0;
    const interval = setInterval(() => {
      this.waves[i].classList.remove('speaker__wave--unset');
      i += 1;
      if (i === 3) clearInterval(interval);
    }, 80);
  }
}
