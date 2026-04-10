import { ReadMoreComponent } from './read-more.component';
import { IconStubComponent } from '../../../testing/component-stubs';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('ReadMoreComponent', ReadMoreComponent, {
  declarations: [IconStubComponent],
});
