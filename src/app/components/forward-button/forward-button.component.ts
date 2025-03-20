import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ehh-forward-button',
    templateUrl: './forward-button.component.html',
    styleUrls: ['./forward-button.component.scss'],
    standalone: false
})
export class ForwardButtonComponent implements OnInit {
  @Input() title = '';
  @Input() count: number | string = null;
  @Input() color;

  constructor() { }

  ngOnInit(): void {
  }

}
