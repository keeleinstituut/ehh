import { Component, Input, OnInit } from '@angular/core';

const readMoreButtonDefault = 'Loe lisaks';

@Component({
  selector: 'ehh-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  @Input() buttonText = readMoreButtonDefault;
  @Input() expanded = false;
  icon = 'down';

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent(): void {
    this.expanded = !this.expanded;
    this.icon = this.expanded ? 'up' : 'down';
    this.buttonText = this.expanded ? 'Loe vähem' : readMoreButtonDefault;
  }
}
