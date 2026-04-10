import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeFourComponent } from './question-type-four.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';

describe('QuestionTypeFourComponent', () => {
  let component: QuestionTypeFourComponent;
  let fixture: ComponentFixture<QuestionTypeFourComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeFourComponent, {
      providers: [
        { provide: ExerciseService, useValue: exerciseServiceMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(QuestionTypeFourComponent, (instance) => {
      instance.data = createQuestionData();
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
