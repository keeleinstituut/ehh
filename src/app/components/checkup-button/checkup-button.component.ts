import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'ehh-checkup-button',
  templateUrl: './checkup-button.component.html',
  styleUrls: ['./checkup-button.component.scss']
})
export class CheckupButtonComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() correct: boolean = undefined;
  @Input() countClick = false;
  @Input() disabled;
  @Input() showFeedback = true;
  @Output() check: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('checkButton', { read: ElementRef }) checkButton: ElementRef;

  buttonVariant = 'primary';
  subscription$: Subscription;
  private clickCount = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buttonVariant = this.setButtonVariant(this.correct);
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

  setButtonVariant(status: boolean): string {
    switch (status) {
      case true:
        return 'success';
      case false:
        return 'error';
      default:
        return 'primary';
    }
  }

}
