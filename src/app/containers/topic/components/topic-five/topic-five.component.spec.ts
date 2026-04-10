import { TopicFiveComponent } from './topic-five.component';
import { describeShallowComponent } from '../../../../../testing/testbed-helpers';
import { AudioImageListThreeStubComponent, ReadMoreStubComponent } from '../../../../../testing/component-stubs';

describeShallowComponent('TopicFiveComponent', TopicFiveComponent, {
  declarations: [ReadMoreStubComponent, AudioImageListThreeStubComponent],
});
