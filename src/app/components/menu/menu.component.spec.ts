import { MenuComponent } from './menu.component';
import { A11yModule } from '@angular/cdk/a11y';
import { ButtonStubComponent } from '../../../testing/component-stubs';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('MenuComponent', MenuComponent, {
  imports: [A11yModule],
  declarations: [ButtonStubComponent],
});
