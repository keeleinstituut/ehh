import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ehh-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectionComponent),
      multi: true,
    },
  ],
})
export class SelectionComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() item: any;
  @Input() type: string;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  control = new FormControl();
  private subscription$: Subscription;
  onChange = (_: any) => {};
  onTouch = () => { };

  ngOnInit(): void {
    this.subscription$ = this.control.valueChanges.subscribe((value) => {
      console.log('valueChanges');
      console.log(value);
      this.onChange(value);
      this.valueChanged.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  writeValue(value: any): void {
    this.control.patchValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
