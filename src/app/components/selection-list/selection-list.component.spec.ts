import { ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectionListComponent } from './selection-list.component';
import { configureShallowTestingModule, createFixture } from '@testing/testbed-helpers';
import { createQuestionOption } from '@testing/spec-factories';
import { CheckboxSelectionStubComponent, RadioSelectionStubComponent } from '@testing/component-stubs';

describe('SelectionListComponent', () => {
  // let component: SelectionListComponent;
  let fixture: ComponentFixture<SelectionListComponent>;

  beforeEach(async () => {
    await configureShallowTestingModule(SelectionListComponent, {
      imports: [ReactiveFormsModule],
      declarations: [RadioSelectionStubComponent, CheckboxSelectionStubComponent],
    });
    fixture = createFixture(SelectionListComponent, {
      inputs: {
        items: [createQuestionOption()],
        selectionType: 'none',
      },
    });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
