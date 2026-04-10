import { DropAreaComponent } from './drop-area.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IconStubComponent } from '../../../testing/component-stubs';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('DropAreaComponent', DropAreaComponent, {
  imports: [DragDropModule],
  declarations: [IconStubComponent],
});
