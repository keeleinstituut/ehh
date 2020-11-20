import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionOption } from '../../services/api/api.models';
import { CdkDrag, CdkDragDrop, CdkDragExit, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ehh-drag-option',
  templateUrl: './drag-option.component.html',
  styleUrls: ['./drag-option.component.scss']
})
export class DragOptionComponent implements OnInit {
  @Input() option: QuestionOption;
  @Input() optionId: any;
  @Input() connectedTo: string[];
  @Output() itemArrived: EventEmitter<any> = new EventEmitter<any>();
  optionList: QuestionOption[] = [];

  constructor() { }

  ngOnInit(): void {
    this.optionList.push(this.option);
  }

  limitItem(item: CdkDrag, drop: CdkDropList): boolean {
    return drop.data.length < 1;
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length < 2) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
      const itemData = event.container.data[0];
      this.itemArrived.emit(itemData);
    }
  }
}
