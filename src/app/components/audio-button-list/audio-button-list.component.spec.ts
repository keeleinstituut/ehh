import { AudioButtonListComponent } from './audio-button-list.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { AudioButtonStubComponent } from '@testing/component-stubs';

describeShallowComponent('AudioButtonListComponent', AudioButtonListComponent, {
  declarations: [AudioButtonStubComponent],
});
