import { CheckupButtonComponent } from './checkup-button.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { CommonModule } from '@angular/common';
import { ButtonStubComponent } from '@testing/component-stubs';

describeShallowComponent('CheckupButtonComponent', CheckupButtonComponent, {
  imports: [CommonModule],
  declarations: [ButtonStubComponent],
});
