import { ComponentFixture } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ContainersFacadeService } from '../containers.facade.service';
import { StatesService } from '../../services/states/states.service';
import { configureShallowTestingModule, createFixture } from '../../../testing/testbed-helpers';
import { createFacadeMock, createStatesServiceMock } from '../../../testing/spec-factories';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const facadeMock = createFacadeMock();
  const statesMock = createStatesServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(HomeComponent, {
      providers: [
        { provide: ContainersFacadeService, useValue: facadeMock },
        { provide: StatesService, useValue: statesMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
