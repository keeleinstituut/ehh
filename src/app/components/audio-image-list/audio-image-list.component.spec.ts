import { AudioImageListComponent } from './audio-image-list.component';
import { describeShallowComponent } from '../../../testing/testbed-helpers';
import { ExerciseAudioStubComponent } from '../../../testing/component-stubs';

describeShallowComponent('AudioImageListComponent', AudioImageListComponent, {
  declarations: [ExerciseAudioStubComponent],
});
