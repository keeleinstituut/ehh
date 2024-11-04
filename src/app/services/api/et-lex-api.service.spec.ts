import { TestBed } from '@angular/core/testing';

import { EtLexApiService } from './et-lex-api.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('EtLexApiService', () => {
  let service: EtLexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [EtLexApiService, provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(EtLexApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
