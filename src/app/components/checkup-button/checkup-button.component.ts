import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
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
  @Output() check: EventEmitter<any> = new EventEmitter<any>();
  @Input() correct: boolean;
  @ViewChild('checkButton', { read: ElementRef} ) checkButton: ElementRef;

  subscription$: Subscription;
  private clickCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.subscription$ = fromEvent<any>(this.checkButton.nativeElement, 'click')
      .subscribe(() => { this.countClicks(); });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    if (this.subscription$) this.subscription$.unsubscribe();
  }

  private countClicks(): void {
    if (this.clickCount < 2) {
      this.clickCount += 1;
      this.check.emit(this.clickCount);
    }
    if (this.clickCount === 2) this.clickCount = 0;
  }

}
