import { AudioButtonComponent } from './audio-button.component';
import { SoundAnimationStubComponent } from '../../../testing/component-stubs';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('AudioButtonComponent', AudioButtonComponent, {
  declarations: [SoundAnimationStubComponent],
});
