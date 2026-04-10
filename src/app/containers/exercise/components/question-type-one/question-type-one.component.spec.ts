import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeOneComponent } from './question-type-one.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';

describe('QuestionTypeOneComponent', () => {
  let component: QuestionTypeOneComponent;
  let fixture: ComponentFixture<QuestionTypeOneComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeOneComponent, {
      providers: [
        { provide: ExerciseService, useValue: exerciseServiceMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(QuestionTypeOneComponent, (instance) => {
      instance.data = createQuestionData();
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
