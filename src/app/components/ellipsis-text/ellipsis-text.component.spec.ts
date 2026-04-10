import { EllipsisTextComponent } from './ellipsis-text.component';
import { IconStubComponent } from '../../../testing/component-stubs';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('EllipsisTextComponent', EllipsisTextComponent, {
  declarations: [IconStubComponent],
});
