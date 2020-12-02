import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ehh-radio-selection',
  templateUrl: './radio-selection.component.html',
  styleUrls: ['./radio-selection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioSelectionComponent),
      multi: true,
    },
  ],
})
export class RadioSelectionComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() audioUrl: string;
  @Input() audioButtonText: string;
  @Input() value: number;

  formGroup: FormGroup = new FormGroup({});
  selected = false;
  control = new FormControl();
  private subscription$: Subscription;

  onChange = (_: any) => {};
  onTouch = () => { };

  constructor() { }

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
