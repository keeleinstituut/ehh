import { TopicFourComponent } from './topic-four.component';
import { describeShallowComponent } from '../../../../../testing/testbed-helpers';
import { AudioImageListStubComponent, EllipsisTextStubComponent, ReadMoreStubComponent } from '../../../../../testing/component-stubs';

describeShallowComponent('TopicFourComponent', TopicFourComponent, {
  declarations: [ReadMoreStubComponent, AudioImageListStubComponent, EllipsisTextStubComponent],
});
