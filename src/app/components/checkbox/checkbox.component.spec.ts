import { CheckboxComponent } from './checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('CheckboxComponent', CheckboxComponent, {
  imports: [ReactiveFormsModule],
});
