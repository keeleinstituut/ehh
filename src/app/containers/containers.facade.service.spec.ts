import { TestBed } from '@angular/core/testing';

import { ContainersFacadeService } from './containers.facade.service';
import { EtLexApiService } from '../services/api/et-lex-api.service';
import { HttpClientModule } from '@angular/common/http';
import { StatesService } from '../services/states/states.service';

describe('ContainersFacadeService', () => {
  let service: ContainersFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContainersFacadeService, EtLexApiService, StatesService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ContainersFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
