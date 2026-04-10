import { TopicOneComponent } from './topic-one.component';
import { describeShallowComponent } from '../../../../../testing/testbed-helpers';
import {
  ReadMoreStubComponent,
  VideoStubComponent,
  VocalTrapezeStubComponent,
} from '../../../../../testing/component-stubs';

describeShallowComponent('TopicOneComponent', TopicOneComponent, {
  declarations: [ReadMoreStubComponent, VocalTrapezeStubComponent, VideoStubComponent],
});
