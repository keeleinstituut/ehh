import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-checkbox-selection',
  templateUrl: './checkbox-selection.component.html',
  styleUrls: ['./checkbox-selection.component.scss']
})
export class CheckboxSelectionComponent implements OnInit {
  @Input() audioUrl: string;
  @Input() audioButtonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
