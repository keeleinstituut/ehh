import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeTwoComponent } from './question-type-two.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';

describe('QuestionTypeTwoComponent', () => {
  let component: QuestionTypeTwoComponent;
  let fixture: ComponentFixture<QuestionTypeTwoComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeTwoComponent, {
      providers: [
        { provide: ExerciseService, useValue: exerciseServiceMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(QuestionTypeTwoComponent, (instance) => {
      instance.data = createQuestionData();
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
