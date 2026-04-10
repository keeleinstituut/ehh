import { TopicThreeComponent } from './topic-three.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { AudioButtonStubComponent, ReadMoreStubComponent } from '@testing/component-stubs';

describeShallowComponent('TopicThreeComponent', TopicThreeComponent, {
  declarations: [ReadMoreStubComponent, AudioButtonStubComponent],
});
