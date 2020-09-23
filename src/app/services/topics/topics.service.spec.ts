import { TestBed } from '@angular/core/testing';

import { TopicsService } from './topics.service';
import { EtLexApiService } from '../../api/et-lex-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('TopicsService', () => {
  let service: TopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TopicsService, EtLexApiService]
    });
    service = TestBed.inject(TopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
