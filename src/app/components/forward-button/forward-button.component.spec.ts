import { ForwardButtonComponent } from './forward-button.component';
import { describeShallowComponent } from '../../../testing/testbed-helpers';
import { CircleStubComponent, IconStubComponent } from '../../../testing/component-stubs';

describeShallowComponent('ForwardButtonComponent', ForwardButtonComponent, {
  declarations: [CircleStubComponent, IconStubComponent],
});
