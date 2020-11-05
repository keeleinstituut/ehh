import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ehh-gap-write',
  templateUrl: './gap-write.component.html',
  styleUrls: ['./gap-write.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GapWriteComponent),
      multi: true
    },
  ]
})
export class GapWriteComponent implements OnInit, ControlValueAccessor {
  @Input() soundPath: string;
  @Input() dropAreaId: string;
  @Output() itemArrived: EventEmitter<any> = new EventEmitter<any>();
  value = '';
  controlName: string;
  formGroup: FormGroup;

  constructor(private sound: SoundService) { }

  ngOnInit(): void {
  }

  async playSound(): Promise<void> {
    await this.sound.getSoundFileAndPlay(this.soundPath);
  }

  inputChanged(event: any): void {
    this.value = event.target.value;
    this.onChangeFn(this.value);
  }

  public onChangeFn = (_: any) => {};
  public onTouchedFn = () => { };

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
