import { FeedbackComponent } from './feedback.component';
import { describeShallowComponent } from '../../../testing/testbed-helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { ContainersFacadeService } from '../containers.facade.service';
import { ButtonStubComponent, ModalStubComponent, TextInputStubComponent } from '../../../testing/component-stubs';

describeShallowComponent('FeedbackComponent', FeedbackComponent, {
  imports: [ReactiveFormsModule],
  declarations: [ModalStubComponent, TextInputStubComponent, ButtonStubComponent],
  providers: [
    {
      provide: ContainersFacadeService,
      useValue: {
        feedbackSent: vi.fn().mockReturnValue(of(false)),
        closeModal: vi.fn(),
        sendFeedback: vi.fn(),
      },
    },
  ],
});
