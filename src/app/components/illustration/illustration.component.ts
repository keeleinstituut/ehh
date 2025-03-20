import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ehh-illustration',
    templateUrl: './illustration.component.html',
    styleUrls: ['./illustration.component.scss'],
    standalone: false
})
export class IllustrationComponent implements OnInit {
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
