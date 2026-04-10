import { ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RadioSelectionComponent } from './radio-selection.component';
import { SoundService } from '../../services/sound/sound.service';
import { configureShallowTestingModule, createFixture } from '../../../testing/testbed-helpers';
import { createQuestionOption, createSoundServiceMock } from '../../../testing/spec-factories';

describe('RadioSelectionComponent', () => {
  let component: RadioSelectionComponent;
  let fixture: ComponentFixture<RadioSelectionComponent>;
  const soundServiceMock = createSoundServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(RadioSelectionComponent, {
      imports: [ReactiveFormsModule],
      providers: [
        { provide: SoundService, useValue: soundServiceMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(RadioSelectionComponent, (instance) => {
      instance.item = createQuestionOption();
      instance.audioUrl = '';
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
