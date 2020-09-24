import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @Input() content: string | number;
  @Input() background = '#EADFE7';
  @Input() text = '#3F3F3F';

  constructor() { }

  ngOnInit(): void {
  }

}
