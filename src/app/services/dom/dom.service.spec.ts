import { vi } from 'vitest';
import { DomService } from './dom.service';

describe('DomService', () => {
  it('should be created', () => {
    const service = new DomService(
      { resolveComponentFactory: vi.fn() } as any,
      { attachView: vi.fn(), detachView: vi.fn() } as any,
      {} as any,
    );

    expect(service).toBeTruthy();
  });
});
