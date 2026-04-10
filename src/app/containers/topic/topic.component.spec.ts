import { ComponentFixture } from '@angular/core/testing';
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

describe('TopicComponent', () => {
  let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;
  const routerSpy = createRouterSpy(['navigate']);
  const facadeMock = createFacadeMock();
  const statesMock = createStatesServiceMock();
  const urlServiceMock = createUrlServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(TopicComponent, {
      providers: [
        provideActivatedRouteParamMap({ id: 1 }),
        { provide: Router, useValue: routerSpy },
        { provide: ContainersFacadeService, useValue: facadeMock },
        { provide: StatesService, useValue: statesMock },
        { provide: UrlService, useValue: urlServiceMock },
      ],
    });
  });

  beforeEach(() => {
    fixture = createFixture(TopicComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
