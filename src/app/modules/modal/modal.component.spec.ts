import { ModalComponent } from './modal.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { A11yModule } from '@angular/cdk/a11y';

describeShallowComponent('ModalComponent', ModalComponent, {
  imports: [A11yModule],
});
