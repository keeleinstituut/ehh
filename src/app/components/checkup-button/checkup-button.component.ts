import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ehh-checkup-button',
  templateUrl: './checkup-button.component.html',
  styleUrls: ['./checkup-button.component.scss']
})
export class CheckupButtonComponent implements OnInit {
  @Output() check: EventEmitter<any> = new EventEmitter<any>();
  @Input() correct: boolean;
  successClass = 'checkup--success';
  failClass = 'checkup--fail';

  constructor() { }

  ngOnInit(): void {
  }

}
