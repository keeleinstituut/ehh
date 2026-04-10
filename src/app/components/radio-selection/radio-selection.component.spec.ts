import { ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RadioSelectionComponent } from './radio-selection.component';
import { SoundService } from '../../services/sound/sound.service';
import { configureShallowTestingModule, createFixture } from '@testing/testbed-helpers';
import { createQuestionOption, createSoundServiceMock } from '@testing/spec-factories';
import { SoundAnimationStubComponent } from '@testing/component-stubs';

describe('RadioSelectionComponent', () => {
  // let component: RadioSelectionComponent;
  let fixture: ComponentFixture<RadioSelectionComponent>;
  const soundServiceMock = createSoundServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(RadioSelectionComponent, {
      imports: [ReactiveFormsModule],
      declarations: [SoundAnimationStubComponent],
      providers: [{ provide: SoundService, useValue: soundServiceMock }],
    });
    fixture = createFixture(RadioSelectionComponent, {
      inputs: {
        item: createQuestionOption(),
        audioUrl: '',
      },
    });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
