import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ehh-ellipsis-text',
  templateUrl: './ellipsis-text.component.html',
  styleUrls: ['./ellipsis-text.component.scss']
})
export class EllipsisTextComponent implements OnInit {
  icon = 'ellipsis';


  @Input() expanded = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleContent(): void {
    this.expanded = !this.expanded;
    this.icon = this.expanded ? 'right' : 'ellipsis';

  }

}
