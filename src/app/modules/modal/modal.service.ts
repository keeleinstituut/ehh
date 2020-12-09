import { Injectable } from '@angular/core';
import { DomService } from '../../services/dom/dom.service';

@Injectable({providedIn: 'root'})
export class ModalService {

  constructor(
    private domService: DomService) {
  }

  closeModal(): void {
    this.domService.close();
  }

  openModal(component: any, data?: any): void {
    this.domService.appendComponentToBody(component, data);
  }
}
