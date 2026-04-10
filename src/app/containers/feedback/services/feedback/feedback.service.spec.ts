import { vi } from 'vitest';
import { FeedbackService } from './feedback.service';

describe('FeedbackService', () => {
  it('should be created', () => {
    const service = new FeedbackService({
      sendFeedback: vi.fn(),
    } as any);

    expect(service).toBeTruthy();
  });
});
