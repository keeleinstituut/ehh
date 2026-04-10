import { Component, Input } from '@angular/core';

const readMoreButtonDefault = 'Näita rohkem';

@Component({
  selector: 'ehh-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  standalone: false,
})
export class ReadMoreComponent {
  @Input() buttonText = readMoreButtonDefault;
  @Input() expanded = false;
  @Input() readMoreContent = true;
  icon = 'down';

  constructor() {}

  toggleContent(): void {
    this.expanded = !this.expanded;
    this.icon = this.expanded ? 'up' : 'down';
    this.buttonText = this.expanded ? 'Näita vähem' : readMoreButtonDefault;
  }
}
