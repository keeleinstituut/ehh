import { Component, forwardRef, Input } from '@angular/core';
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
    ],
    standalone: false
})
export class TextInputComponent implements ControlValueAccessor {
  private static nextId = 0;

  @Input() type = 'text';
  @Input() label: string;

  inputId = `text-input-${TextInputComponent.nextId++}`;
  value = '';
  onChangeFn = (_: any) => {};
  onTouchedFn = () => { };

  constructor() { }

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
