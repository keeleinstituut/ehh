import { Component, Input, OnInit } from '@angular/core';
import { DomService } from '../../services/dom/dom.service';

@Component({
  selector: 'ehh-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() closeText = 'Sulge';
  @Input() closeButton = true;
  @Input() maxWidth: string;
  constructor(private domService: DomService) {}

  ngOnInit(): void {
  }
  close(): void {
    this.domService.close();
  }

  cancel(): void {
    this.domService.close();
  }

}
