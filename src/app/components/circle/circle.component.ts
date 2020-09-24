import { Component, Input, OnInit } from '@angular/core';

const defaultBackground = '#EADFE7';

@Component({
  selector: 'ehh-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @Input() content: string | number;
  @Input() background = defaultBackground;
  @Input() text = '#3F3F3F';

  defaultBackground = defaultBackground;

  constructor() { }

  ngOnInit(): void {
  }

}
