import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionOption } from '../../services/api/api.models';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  constructor(private sound: SoundService) { }
  @Input() soundPath: string;
  @Input() dropAreaId: string;
  @Input() blockComponent = false;
  @Output() itemArrived: EventEmitter<any> = new EventEmitter<any>();
  value = '';
  controlName: string;
  formGroup: FormGroup;
  dropData: QuestionOption[] = [];
  soundPlaceHolder = '<i class="icon icon-sound_3"></i>';

  ngOnInit(): void {
  }

  async playSound(): Promise<void> {
    try {
      const played = await this.sound.getSoundFileAndPlay(this.soundPath);
      if (played) {
        this.sound.sampleSource.addEventListener('ended', () => {
          this.sound.clearSampleSource();
        });
      }
    } catch (e) {
      console.error(e);
      this.sound.clearSampleSource();
    }
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

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length < 2) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
      const itemData = event.container.data[0];
      const controlName = event.container.id;
      this.itemArrived.emit({ itemData, controlName });
    }
  }

  limitItem(item: CdkDrag, drop: CdkDropList): boolean {
    return drop.data.length < 1;
  }
}
