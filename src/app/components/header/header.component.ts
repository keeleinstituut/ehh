import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'ehh-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  @Output() openMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  sonaveebLink: string;

  constructor() {
  }

  ngOnInit(): void {
    this.sonaveebLink = environment.sonaveebHost;
  }
}
