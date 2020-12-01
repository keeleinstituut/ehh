import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ehh-checkbox-selection',
  templateUrl: './checkbox-selection.component.html',
  styleUrls: ['./checkbox-selection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxSelectionComponent),
      multi: true,
    },
  ],
})
export class CheckboxSelectionComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() audioUrl: string;
  @Input() audioButtonText: string;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup = new FormGroup({});
  selected = false;
  control = new FormControl();
  private subscription$: Subscription;

  onChange = (_: any) => {};
  onTouch = () => { };

  constructor() { }

  ngOnInit(): void {
    this.formGroup.addControl('checkbox', new FormControl(false));
    this.subscription$ = this.formGroup.controls.checkbox.valueChanges.subscribe(value => {
      this.onChange(value);
      this.selected = value;
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
