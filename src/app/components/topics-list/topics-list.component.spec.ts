import { TopicsListComponent } from './topics-list.component';
import { describeShallowComponent } from '../../../testing/testbed-helpers';
import { ForwardButtonStubComponent } from '../../../testing/component-stubs';

describeShallowComponent('TopicsListComponent', TopicsListComponent, {
  declarations: [ForwardButtonStubComponent],
});
