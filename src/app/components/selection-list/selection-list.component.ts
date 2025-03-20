import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { QuestionOption } from '../../services/api/api.models';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { EtalonType } from '../../containers/exercise/components/question-type-one/question-type-one.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ehh-selection-list',
    templateUrl: './selection-list.component.html',
    styleUrls: ['./selection-list.component.scss'],
    standalone: false
})
export class SelectionListComponent implements OnInit, OnDestroy {
  @Input() items: QuestionOption[];
  @Input() selectionType: string;
  @Output() listStatus: EventEmitter<any> = new EventEmitter<any>();
  formControlName: string;
  formControlList: string[] = [];
  formGroup: UntypedFormGroup = new UntypedFormGroup({});
  optionType: EtalonType;
  private subscriptions$: Subscription[];

  constructor() { }

  ngOnInit(): void {
    this.optionType = this.decideOptionType(this.items[0]);
    this.setFormControlNames();
    const radioControl$ = this.formGroup.valueChanges.subscribe(value => {
      if (this.selectionType === 'radio') {
        this.handleRadioButtons(value.optionControl);
      }
    });
    this.subscriptions$ = [radioControl$];
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe());
  }

  private setFormControlNames(): void {
    if (this.selectionType === 'radio') {
      this.formControlName = 'optionControl';
      this.formGroup.addControl(this.formControlName, new UntypedFormControl(null, Validators.required));
    } else if (this.selectionType === 'checkbox') {
      this.items.forEach((option, index) => {
        const controlName = `option${index}Control`;
        this.formControlList.push(controlName);
        this.formGroup.addControl(controlName, new UntypedFormControl(false));
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

  handleCheckboxes(value: any, index: number): void {
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

  handleRadioButtons(value: any): void {
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
