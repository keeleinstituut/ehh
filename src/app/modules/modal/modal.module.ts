import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, A11yModule],
  exports: [ModalComponent],
})
export class ModalModule {}
