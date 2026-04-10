import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeFourComponent } from './question-type-four.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';
import { IllustrationStubComponent, QuestionDirectiveStubComponent } from '../../../../../testing/component-stubs';

describe('QuestionTypeFourComponent', () => {
  // let component: QuestionTypeFourComponent;
  let fixture: ComponentFixture<QuestionTypeFourComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeFourComponent, {
      declarations: [QuestionDirectiveStubComponent, IllustrationStubComponent],
      providers: [
        { provide: ExerciseService, useValue: exerciseServiceMock },
      ],
    });
    fixture = createFixture(QuestionTypeFourComponent, {
      inputs: {
        data: createQuestionData(),
      },
    });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
