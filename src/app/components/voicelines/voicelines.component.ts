import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'ehh-voicelines',
    templateUrl: './voicelines.component.html',
    styleUrls: ['./voicelines.component.scss'],
    standalone: false
})
export class VoicelinesComponent implements OnInit, AfterViewInit {
  @Input() animationLength: number;
  @ViewChild('voiceLines') voiceLines: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const voiceLinesElement = this.voiceLines.nativeElement;
    const lines: HTMLElement[] = voiceLinesElement.querySelectorAll('rect');
    const linesCount = lines.length;
    const animationStep = this.animationLength / linesCount;

    let i = 0;
    const interval = setInterval(() => {
      lines[i].setAttribute('fill', '#FFFFFF');
      i += 1;
      if (i === linesCount) clearInterval(interval);
    }, animationStep);
  }

}
