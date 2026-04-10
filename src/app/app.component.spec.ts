import { ComponentFixture } from '@angular/core/testing';
import { vi } from 'vitest';
import { AppComponent } from './app.component';
import { ContainersFacadeService } from './containers/containers.facade.service';
import { StatesService } from './services/states/states.service';
import { configureShallowTestingModule, createFixture } from '../testing/testbed-helpers';
import { createStatesServiceMock } from '../testing/spec-factories';
import { HeaderStubComponent, MenuStubComponent, RouterOutletStubComponent } from '../testing/component-stubs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await configureShallowTestingModule(AppComponent, {
      declarations: [HeaderStubComponent, MenuStubComponent, RouterOutletStubComponent],
      providers: [
        { provide: ContainersFacadeService, useValue: { openModal: vi.fn() } },
        { provide: StatesService, useValue: createStatesServiceMock() },
      ],
    });

    fixture = createFixture(AppComponent);
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
