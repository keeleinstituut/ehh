import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ehh-drag-item',
    templateUrl: './drag-item.component.html',
    styleUrls: ['./drag-item.component.scss'],
    standalone: false
})
export class DragItemComponent implements OnInit {
  @Input() title: string;
  @Input() audioUrl: string;

  constructor() { }

  ngOnInit(): void {
  }
}
