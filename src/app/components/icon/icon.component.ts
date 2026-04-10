import { Component, Input } from '@angular/core';

@Component({
  selector: 'ehh-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: false,
})
export class IconComponent {
  @Input() icon: string;
  @Input() size = 'medium';
  @Input() color: string;

  sizes = {
    small: 'icon--small',
    medium: 'icon--medium',
    large: 'icon--large',
  };

  constructor() {}
}
