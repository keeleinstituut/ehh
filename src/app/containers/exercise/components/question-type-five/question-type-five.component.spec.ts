import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeFiveComponent } from './question-type-five.component';
import { SoundService } from '../../../../services/sound/sound.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createQuestionData, createSoundServiceMock } from '../../../../../testing/spec-factories';

describe('QuestionTypeFiveComponent', () => {
  let component: QuestionTypeFiveComponent;
  let fixture: ComponentFixture<QuestionTypeFiveComponent>;
  const soundServiceMock = createSoundServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeFiveComponent, {
      providers: [
        { provide: SoundService, useValue: soundServiceMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(QuestionTypeFiveComponent, (instance) => {
      instance.data = createQuestionData();
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
