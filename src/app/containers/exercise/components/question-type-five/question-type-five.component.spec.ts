import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeFiveComponent } from './question-type-five.component';
import { SoundService } from '../../../../services/sound/sound.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createQuestionData, createSoundServiceMock } from '../../../../../testing/spec-factories';
import {
  ButtonStubComponent,
  IllustrationButtonStubComponent,
  IllustrationStubComponent,
  QuestionDirectiveStubComponent,
  VoicelinesStubComponent,
} from '../../../../../testing/component-stubs';

describe('QuestionTypeFiveComponent', () => {
  // let component: QuestionTypeFiveComponent;
  let fixture: ComponentFixture<QuestionTypeFiveComponent>;
  const soundServiceMock = createSoundServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeFiveComponent, {
      declarations: [
        QuestionDirectiveStubComponent,
        IllustrationButtonStubComponent,
        ButtonStubComponent,
        VoicelinesStubComponent,
        IllustrationStubComponent,
      ],
      providers: [{ provide: SoundService, useValue: soundServiceMock }],
    });
    fixture = createFixture(QuestionTypeFiveComponent, {
      inputs: {
        data: createQuestionData(),
      },
    });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
