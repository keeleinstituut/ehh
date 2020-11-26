import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionOption } from '../../services/api/api.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtalonType } from '../../containers/exercise/components/question-type-one/question-type-one.component';

@Component({
  selector: 'ehh-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {
  @Input() items: QuestionOption[];
  @Input() selectionType: string;
  @Output() listStatus: EventEmitter<any> = new EventEmitter<any>();
  formControlName: string;
  formControlList: string[] = [];
  formGroup: FormGroup = new FormGroup({});
  optionType: EtalonType;

  constructor() { }

  ngOnInit(): void {
    this.optionType = this.decideOptionType(this.items[0]);
    this.setFormControlNames();
  }

  private setFormControlNames(): void {
    if (this.selectionType === 'radio') {
      this.formControlName = 'optionControl';
      this.formGroup.addControl(this.formControlName, new FormControl(null, Validators.required));
    } else if (this.selectionType === 'checkbox') {
      this.items.forEach((option, index) => {
        const controlName = `option${index}Control`;
        this.formControlList.push(controlName);
        this.formGroup.addControl(controlName, new FormControl(false));
      });
    }
  }

  handleSelectionButtons(value: any, index: number): void {
    if (this.selectionType === 'radio') {
      this.handleRadioButtons(value);
    } else if (this.selectionType === 'checkbox') {
      this.handleCheckboxes(index, value);
    }

  }

  private handleCheckboxes(index: number, value: any): void {
    this.items[index].selected = value;
    const controls = this.formGroup.value;
    for (const key in controls) {
      if (controls.hasOwnProperty(key) && controls[key] === true) {
        this.listStatus.emit(true);
        break;
      } else {
        this.listStatus.emit(false);
      }
    }
  }

  private handleRadioButtons(value: any): void {
    this.items.forEach((option, idx) => {
      this.items[idx].selected = option.id === value;
    });
    if (this.formGroup.valid) {
      this.listStatus.emit(true);
    }
  }

  private decideOptionType(option: QuestionOption): EtalonType {
    if (option.img?.length) return EtalonType.IMAGE;
    if (option.wav?.length) return EtalonType.AUDIO;
    return EtalonType.TEXT;
  }
}
