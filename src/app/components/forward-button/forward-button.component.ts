import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-forward-button',
  templateUrl: './forward-button.component.html',
  styleUrls: ['./forward-button.component.scss']
})
export class ForwardButtonComponent implements OnInit {
  @Input() title = '';
  @Input() count: number = null;

  constructor() { }

  ngOnInit(): void {
  }

}
