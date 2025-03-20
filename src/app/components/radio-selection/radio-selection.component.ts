import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SoundService } from '../../services/sound/sound.service';
import { QuestionOption } from '../../services/api/api.models';
import { skip } from 'rxjs/operators';

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
    standalone: false
})
export class RadioSelectionComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() audioUrl: string;
  @Input() item: QuestionOption;
  @Input() radioImage = false;

  animate = false;
  control = new UntypedFormControl();
  private subscription$: Subscription;

  onChange = (_: any) => {};
  onTouch = () => { };

  constructor(private sound: SoundService) { }

  ngOnInit(): void {
    this.subscription$ = this.control.valueChanges
      .pipe(skip(1))
      .subscribe(async (value) => {
      this.onChange(value);
      await this.playAudio();
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

  private async playAudio(): Promise<void> {
    this.animate = true;
    const sound = await this.sound.playAudio(this.audioUrl);
    sound.on('end', () => {
      this.animate = false;
    });
    sound.on('loaderror', () => {
      this.animate = false;
    });
  }
}
