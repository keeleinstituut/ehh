import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ehh-drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.scss']
})
export class DragItemComponent implements OnInit {
  @Input() title: string;
  @Input() audioUrl: string;

  constructor() { }

  ngOnInit(): void {
  }
}
