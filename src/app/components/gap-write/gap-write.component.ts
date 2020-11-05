import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { SoundService } from '../../services/sound/sound.service';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuestionOption } from '../../services/api/api.models';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  @Output() itemArrived: EventEmitter<any> = new EventEmitter<any>();
  value = '';
  controlName: string;
  formGroup: FormGroup;
  dropData: QuestionOption[] = [
    {
      gap_nr: null,
      id: null,
      img: null,
      iscorrect: null,
      ord: null,
      question_id: null,
      text: '&#8203;',
      type: null,
      wav: null,
    }
  ];

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

  drop(event: CdkDragDrop<any>): void {
    console.log('dropped into GapWriteComponent');
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length < 2) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
      const itemData = event.container.data[0];
      const controlName = event.container.id;
      this.itemArrived.emit({ itemData, controlName });
    }
  }
}
