import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ehh-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
})
export class RadioButtonComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() item: any;
  @Input() id: string;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  control = new FormControl();
  private subscription$: Subscription;
  onChange = (_: any) => {};
  onTouch = () => { };

  ngOnInit(): void {
    this.subscription$ = this.control.valueChanges.subscribe((value) => {
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

