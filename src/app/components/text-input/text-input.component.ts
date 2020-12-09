import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ehh-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    },
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() type = 'text';
  @Input() label: string;

  value = '';
  onChangeFn = (_: any) => {};
  onTouchedFn = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  inputChanged(event: any): void {
    this.value = event.target.value;
    this.onChangeFn(this.value);
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

}
