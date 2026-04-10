import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeTwoComponent } from './question-type-two.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';
import {
  IllustrationStubComponent,
  QuestionDirectiveStubComponent,
  SelectionListStubComponent,
} from '../../../../../testing/component-stubs';

describe('QuestionTypeTwoComponent', () => {
  // let component: QuestionTypeTwoComponent;
  let fixture: ComponentFixture<QuestionTypeTwoComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeTwoComponent, {
      declarations: [QuestionDirectiveStubComponent, SelectionListStubComponent, IllustrationStubComponent],
      providers: [{ provide: ExerciseService, useValue: exerciseServiceMock }],
    });
    fixture = createFixture(QuestionTypeTwoComponent, {
      inputs: {
        data: createQuestionData(),
      },
    });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
