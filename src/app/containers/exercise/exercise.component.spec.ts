import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ExerciseComponent } from './exercise.component';
import { ContainersFacadeService } from '../containers.facade.service';
import { StatesService } from '../../services/states/states.service';
import { configureShallowTestingModule, createFixture } from '../../../testing/testbed-helpers';
import {
  createFacadeMock,
  createRouterSpy,
  createStatesServiceMock,
  provideActivatedRouteParams,
} from '../../../testing/spec-factories';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;
  const routerSpy = createRouterSpy(['navigate'], {
    routerState: { snapshot: { url: '/topic/1/exercise/1' } } as any
  });
  const facadeMock = createFacadeMock();
  const statesMock = createStatesServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(ExerciseComponent, {
      providers: [
        provideActivatedRouteParams({ topicId: 1, exerciseId: 1 }),
        { provide: Router, useValue: routerSpy },
        { provide: ContainersFacadeService, useValue: facadeMock },
        { provide: StatesService, useValue: statesMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(ExerciseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
