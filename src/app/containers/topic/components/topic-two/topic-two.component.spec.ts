import { TopicTwoComponent } from './topic-two.component';
import { describeShallowComponent } from '../../../../../testing/testbed-helpers';
import {
  AudioButtonListStubComponent,
  AudioButtonStubComponent,
  AudioImageListStubComponent,
  EllipsisTextStubComponent,
  ReadMoreStubComponent,
  WordsListStubComponent,
} from '../../../../../testing/component-stubs';

describeShallowComponent('TopicTwoComponent', TopicTwoComponent, {
  declarations: [
    ReadMoreStubComponent,
    AudioButtonListStubComponent,
    AudioImageListStubComponent,
    AudioButtonStubComponent,
    WordsListStubComponent,
    EllipsisTextStubComponent,
  ],
});
