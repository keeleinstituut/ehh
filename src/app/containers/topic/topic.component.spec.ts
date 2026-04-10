import { ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TopicComponent } from './topic.component';
import { ContainersFacadeService } from '../containers.facade.service';
import { StatesService } from '../../services/states/states.service';
import { UrlService } from '../../services/url/url.service';
import { configureShallowTestingModule, createFixture } from '../../../testing/testbed-helpers';
import {
  createFacadeMock,
  createRouterSpy,
  createStatesServiceMock,
  createUrlServiceMock,
  provideActivatedRouteParamMap,
} from '../../../testing/spec-factories';
import { CardStubComponent, ExerciseListStubComponent, TopicsBackButtonStubComponent } from '../../../testing/component-stubs';

describe('TopicComponent', () => {
  // let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;
  const routerSpy = createRouterSpy(['navigate']);
  const facadeMock = createFacadeMock();
  const statesMock = createStatesServiceMock();
  const urlServiceMock = createUrlServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(TopicComponent, {
      imports: [CommonModule],
      declarations: [TopicsBackButtonStubComponent, CardStubComponent, ExerciseListStubComponent],
      providers: [
        provideActivatedRouteParamMap({ id: 1 }),
        { provide: Router, useValue: routerSpy },
        { provide: ContainersFacadeService, useValue: facadeMock },
        { provide: StatesService, useValue: statesMock },
        { provide: UrlService, useValue: urlServiceMock },
      ],
    });
    fixture = createFixture(TopicComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
