import { CheckboxSelectionComponent } from './checkbox-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonStubComponent, CheckboxStubComponent } from '../../../testing/component-stubs';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('CheckboxSelectionComponent', CheckboxSelectionComponent, {
  imports: [ReactiveFormsModule],
  declarations: [ButtonStubComponent, CheckboxStubComponent],
});
