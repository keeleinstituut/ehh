import { HttpClient } from '@angular/common/http';
import { vi } from 'vitest';
import { EtLexApiService } from './et-lex-api.service';

describe('EtLexApiService', () => {
  it('should be created', () => {
    const httpClient = {
      get: vi.fn(),
      post: vi.fn(),
    } as unknown as HttpClient;
    const service = new EtLexApiService(httpClient);

    expect(service).toBeTruthy();
  });
});
