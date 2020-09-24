import { TestBed } from '@angular/core/testing';

import { EtLexApiService } from './et-lex-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('EtLexApiService', () => {
  let service: EtLexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EtLexApiService]
    });
    service = TestBed.inject(EtLexApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
