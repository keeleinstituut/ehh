import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeOneComponent } from './question-type-one.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';
import {
  ButtonStubComponent,
  IllustrationButtonStubComponent,
  IllustrationStubComponent,
  QuestionDirectiveStubComponent,
  SelectionListStubComponent,
} from '../../../../../testing/component-stubs';

describe('QuestionTypeOneComponent', () => {
  // let component: QuestionTypeOneComponent;
  let fixture: ComponentFixture<QuestionTypeOneComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeOneComponent, {
      declarations: [
        QuestionDirectiveStubComponent,
        IllustrationButtonStubComponent,
        ButtonStubComponent,
        SelectionListStubComponent,
        IllustrationStubComponent,
      ],
      providers: [{ provide: ExerciseService, useValue: exerciseServiceMock }],
    });
    fixture = createFixture(QuestionTypeOneComponent, {
      inputs: {
        data: createQuestionData(),
      },
    });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
