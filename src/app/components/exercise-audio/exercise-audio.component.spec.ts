import { ExerciseAudioComponent } from './exercise-audio.component';
import { describeShallowComponent } from '../../../testing/testbed-helpers';
import { AudioButtonStubComponent } from '../../../testing/component-stubs';

describeShallowComponent('ExerciseAudioComponent', ExerciseAudioComponent, {
  declarations: [AudioButtonStubComponent],
});
