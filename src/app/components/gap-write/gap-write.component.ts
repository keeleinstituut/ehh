import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  value = '';

  constructor(private sound: SoundService) { }

  ngOnInit(): void {
  }

  async playSound(): Promise<void> {
    const audioContext = new AudioContext();
    const audioBuffer = await this.sound.getSoundFile(audioContext, this.soundPath);
    this.sound.playSound(audioContext, audioBuffer);
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
