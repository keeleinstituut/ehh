import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.scss']
})
export class DropAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropHandler($event: DragEvent): void {

  }

  dragoverHandler($event: DragEvent): void {

  }
}
