import { AudioImageListThreeComponent } from './audio-image-list-three.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { ExerciseAudioStubComponent } from '@testing/component-stubs';

describeShallowComponent('AudioImageListThreeComponent', AudioImageListThreeComponent, {
  declarations: [ExerciseAudioStubComponent],
});
