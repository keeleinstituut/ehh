import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { QuestionOption } from '../../services/api/api.models';

@Component({
  selector: 'ehh-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.scss']
})
export class DropAreaComponent implements OnInit {
  @Input() dropAreaId: string;
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

  constructor() { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<any>): void {
    console.log('dropped into DropAreaComponent');
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        0);
    }
  }
}
