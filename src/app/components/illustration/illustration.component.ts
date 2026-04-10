import { Component, Input } from '@angular/core';

@Component({
    selector: 'ehh-illustration',
    templateUrl: './illustration.component.html',
    styleUrls: ['./illustration.component.scss'],
    standalone: false
})
export class IllustrationComponent {
  @Input() img: string;

  constructor() { }

}
