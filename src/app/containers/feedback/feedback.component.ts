import { Component, OnInit } from '@angular/core';
import { ContainersFacadeService } from '../containers.facade.service';

@Component({
  selector: 'ehh-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private facade: ContainersFacadeService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.facade.closeModal();
  }
}
