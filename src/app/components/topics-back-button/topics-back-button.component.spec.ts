import { TopicsBackButtonComponent } from './topics-back-button.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { IconStubComponent } from '@testing/component-stubs';

describeShallowComponent('TopicsBackButtonComponent', TopicsBackButtonComponent, {
  declarations: [IconStubComponent],
});
