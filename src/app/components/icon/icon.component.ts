import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ehh-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string;
  @Input() size = 'medium';
  @Input() color: string;

  sizes = {
    small: 'icon--small',
    medium: 'icon--medium',
    large: 'icon--large',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
