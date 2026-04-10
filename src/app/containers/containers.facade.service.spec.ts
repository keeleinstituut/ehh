import { vi } from 'vitest';
import { ContainersFacadeService } from './containers.facade.service';

describe('ContainersFacadeService', () => {
  it('should be created', () => {
    const service = new ContainersFacadeService(
      { fetchTopics: vi.fn() } as any,
      { setTopics: vi.fn() } as any,
      { initializeQuestion: vi.fn() } as any,
      { checkQuestion: vi.fn() } as any,
      { sendFeedback: vi.fn() } as any,
      { openModal: vi.fn(), closeModal: vi.fn() } as any,
    );

    expect(service).toBeTruthy();
  });
});
