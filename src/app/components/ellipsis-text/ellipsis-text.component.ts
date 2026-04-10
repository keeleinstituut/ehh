import { Component, Input } from '@angular/core';

@Component({
  selector: 'ehh-ellipsis-text',
  templateUrl: './ellipsis-text.component.html',
  styleUrls: ['./ellipsis-text.component.scss'],
  standalone: false,
})
export class EllipsisTextComponent {
  icon = 'ellipsis';

  @Input() expanded = false;

  constructor() {}

  toggleContent(): void {
    this.expanded = !this.expanded;
    this.icon = this.expanded ? 'right' : 'ellipsis';
  }
}
