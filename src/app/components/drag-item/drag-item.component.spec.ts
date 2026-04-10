import { DragItemComponent } from './drag-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonStubComponent } from '@testing/component-stubs';
import { describeShallowComponent } from '@testing/testbed-helpers';

describeShallowComponent('DragItemComponent', DragItemComponent, {
  imports: [DragDropModule],
  declarations: [ButtonStubComponent],
});
