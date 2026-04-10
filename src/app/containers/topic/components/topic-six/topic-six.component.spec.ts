import { TopicSixComponent } from './topic-six.component';
import { describeShallowComponent } from '../../../../../testing/testbed-helpers';
import { AudioButtonStubComponent, EllipsisTextStubComponent, ReadMoreStubComponent } from '../../../../../testing/component-stubs';

describeShallowComponent('TopicSixComponent', TopicSixComponent, {
  declarations: [ReadMoreStubComponent, AudioButtonStubComponent, EllipsisTextStubComponent],
});
