import { ComponentFixture } from '@angular/core/testing';

import { QuestionTypeThreeComponent } from './question-type-three.component';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import { createExerciseServiceMock, createQuestionData } from '../../../../../testing/spec-factories';

describe('QuestionTypeThreeComponent', () => {
  let component: QuestionTypeThreeComponent;
  let fixture: ComponentFixture<QuestionTypeThreeComponent>;
  const exerciseServiceMock = createExerciseServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(QuestionTypeThreeComponent, {
      providers: [
        { provide: ExerciseService, useValue: exerciseServiceMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(QuestionTypeThreeComponent, (instance) => {
      instance.data = createQuestionData({ type: 'TYPE3' });
    });
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
