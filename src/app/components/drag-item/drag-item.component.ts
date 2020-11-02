import { Component, Input, OnInit } from '@angular/core';
import { $e } from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'ehh-drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.scss']
})
export class DragItemComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  touchEvent($event: TouchEvent): void {
    console.log($event);
  }
}
