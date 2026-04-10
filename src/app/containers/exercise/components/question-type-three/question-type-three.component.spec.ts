import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeThreeComponent } from './question-type-three.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';
import {
  DragOptionStubComponent,
  IllustrationStubComponent,
  QuestionDirectiveStubComponent,
} from '../../../../../testing/component-stubs';

describe('QuestionTypeThreeComponent', () => {
  // let component: QuestionTypeThreeComponent;
  let fixture: ComponentFixture<QuestionTypeThreeComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeThreeComponent, {
      declarations: [QuestionDirectiveStubComponent, DragOptionStubComponent, IllustrationStubComponent],
      providers: [{ provide: ExerciseService, useValue: exerciseServiceMock }],
    });
    fixture = createFixture(QuestionTypeThreeComponent, {
      inputs: {
        data: createQuestionData({ type: 'TYPE3' }),
      },
    });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
