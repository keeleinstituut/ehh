import { ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectionListComponent } from './selection-list.component';
import { configureShallowTestingModule, createFixture } from '../../../testing/testbed-helpers';
import { createQuestionOption } from '../../../testing/spec-factories';

describe('SelectionListComponent', () => {
  let component: SelectionListComponent;
  let fixture: ComponentFixture<SelectionListComponent>;

  beforeEach(async () => {
    await configureShallowTestingModule(SelectionListComponent, {
      imports: [ReactiveFormsModule],
    });
  });

  beforeEach(() => {
    fixture = createFixture(SelectionListComponent, (instance) => {
      instance.items = [createQuestionOption()];
      instance.selectionType = 'none';
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
