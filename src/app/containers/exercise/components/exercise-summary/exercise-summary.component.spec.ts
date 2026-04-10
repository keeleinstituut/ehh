import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ExerciseSummaryComponent } from './exercise-summary.component';
import { ContainersFacadeService } from '../../../containers.facade.service';
import { StatesService } from '../../../../services/states/states.service';
import { UrlService } from '../../../../services/url/url.service';
import { configureShallowTestingModule, createFixture } from '../../../../../testing/testbed-helpers';
import {
  createFacadeMock,
  createRouterSpy,
  createStatesServiceMock,
  createUrlServiceMock,
  provideActivatedRouteParamMap,
} from '../../../../../testing/spec-factories';
import {
  ButtonStubComponent,
  CardStubComponent,
  FeedbackImageStubComponent,
  TopicsBackButtonStubComponent,
} from '../../../../../testing/component-stubs';

describe('ExerciseFinishComponent', () => {
  let component: ExerciseSummaryComponent;
  let fixture: ComponentFixture<ExerciseSummaryComponent>;
  const routerSpy = createRouterSpy(['navigate', 'navigateByUrl']);
  const facadeMock = createFacadeMock();
  const statesMock = createStatesServiceMock();
  const urlServiceMock = createUrlServiceMock();

  beforeEach(async () => {
    await configureShallowTestingModule(ExerciseSummaryComponent, {
      declarations: [
        TopicsBackButtonStubComponent,
        CardStubComponent,
        FeedbackImageStubComponent,
        ButtonStubComponent,
      ],
      providers: [
        provideActivatedRouteParamMap({ topicId: 1 }, { pathName: 'summary' }),
        { provide: Router, useValue: routerSpy },
        { provide: ContainersFacadeService, useValue: facadeMock },
        { provide: StatesService, useValue: statesMock },
        { provide: UrlService, useValue: urlServiceMock },
      ],
    });
    fixture = createFixture(ExerciseSummaryComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
