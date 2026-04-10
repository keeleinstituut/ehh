import { GapWriteComponent } from './gap-write.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { IconStubComponent, IosZoomStubDirective, SoundAnimationStubComponent } from '../../../testing/component-stubs';
import { describeShallowComponent } from '../../../testing/testbed-helpers';

describeShallowComponent('GapWriteComponent', GapWriteComponent, {
  imports: [ReactiveFormsModule, DragDropModule],
  declarations: [SoundAnimationStubComponent, IconStubComponent, IosZoomStubDirective],
  init: (component) => {
    component.controlName = 'answer';
    component.formGroup = new UntypedFormGroup({
      answer: new UntypedFormControl(''),
    });
  },
});
