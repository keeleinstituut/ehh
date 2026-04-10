import { IconComponent } from './icon.component';
import { describeShallowComponent } from '@testing/testbed-helpers';
import { CommonModule } from '@angular/common';

describeShallowComponent('IconComponent', IconComponent, {
  imports: [CommonModule],
});
