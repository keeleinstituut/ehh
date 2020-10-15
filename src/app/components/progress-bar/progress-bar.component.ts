import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() done = '0%';
  @Input() maxSteps: number;
  @Input() currentStep: number;

  constructor() { }

  ngOnInit(): void {
    if (this.maxSteps && this.currentStep) {
       this.calculateProgress();
    }
  }

  ngOnChanges(): void {
    this.calculateProgress();
  }

  private calculateProgress(): void {
    const progressDone = ((this.currentStep / this.maxSteps) * 100).toString();
    this.done = `${progressDone}%`;
  }
}
