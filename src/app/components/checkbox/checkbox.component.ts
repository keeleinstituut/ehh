import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ehh-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true,
        },
    ],
    standalone: false
})
export class CheckboxComponent implements OnInit, OnDestroy, ControlValueAccessor {
  private subscription$: Subscription;

  constructor() { }

  control = new UntypedFormControl();
  onChange = (_: any) => {};
  onTouch = () => { };

  ngOnInit(): void {
    this.subscription$ = this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
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
