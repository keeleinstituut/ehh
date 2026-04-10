import { DragOptionComponent } from './drag-option.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonStubComponent } from '@testing/component-stubs';
import { describeShallowComponent } from '@testing/testbed-helpers';

describeShallowComponent('DragOptionComponent', DragOptionComponent, {
  imports: [DragDropModule],
  declarations: [ButtonStubComponent],
});
