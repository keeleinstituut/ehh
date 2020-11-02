import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'ehh-checkup-button',
  templateUrl: './checkup-button.component.html',
  styleUrls: ['./checkup-button.component.scss']
})
export class CheckupButtonComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() correct: boolean = undefined;
  @Input() countClick = false;
  @Input() disabled;
  @Input() showFeedback = true;
  @Output() check: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('checkButton', { read: ElementRef }) checkButton: ElementRef;

  subscription$: Subscription;
  private clickCount = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.subscription$ = fromEvent<any>(this.checkButton.nativeElement, 'click')
      .subscribe(() => {
        if (this.disabled) return;
        if (this.showFeedback === false) this.clickCount = 1;
        this.countClicks();
      });
  }

  ngOnDestroy(): void {
    if (this.subscription$) this.subscription$.unsubscribe();
  }

  private countClicks(): void {
    if (this.clickCount < 2) {
      this.clickCount += 1;
      this.check.emit(this.clickCount);
    }
    this.clickCount = this.clickCount === 2 && this.showFeedback ? 0 : 1;
  }

}
