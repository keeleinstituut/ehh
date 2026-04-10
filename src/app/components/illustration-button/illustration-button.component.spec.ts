import { IllustrationButtonComponent } from './illustration-button.component';
import { describeShallowComponent } from '../../../testing/testbed-helpers';
import { SoundAnimationStubComponent } from '../../../testing/component-stubs';

describeShallowComponent('IllustrationButtonComponent', IllustrationButtonComponent, {
  declarations: [SoundAnimationStubComponent],
});
