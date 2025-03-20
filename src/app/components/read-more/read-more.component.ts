import { Component, Input, OnInit } from '@angular/core';

const readMoreButtonDefault = 'Näita rohkem';

@Component({
    selector: 'ehh-read-more',
    templateUrl: './read-more.component.html',
    styleUrls: ['./read-more.component.scss'],
    standalone: false
})
export class ReadMoreComponent implements OnInit {
  @Input() buttonText = readMoreButtonDefault;
  @Input() expanded = false;
  @Input() readMoreContent = true;
  icon = 'down';

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent(): void {
    this.expanded = !this.expanded;
    this.icon = this.expanded ? 'up' : 'down';
    this.buttonText = this.expanded ? 'Näita vähem' : readMoreButtonDefault;
  }
}
