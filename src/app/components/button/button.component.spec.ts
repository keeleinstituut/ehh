import { ButtonComponent } from './button.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { CommonModule } from '@angular/common';
import { IconStubComponent, SoundAnimationStubComponent } from '@testing/component-stubs';

describeShallowComponent('ButtonComponent', ButtonComponent, {
  imports: [CommonModule],
  declarations: [IconStubComponent, SoundAnimationStubComponent],
});
