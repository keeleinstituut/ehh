import { vi } from 'vitest';
import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  it('should be created', () => {
    const service = new ExerciseService({} as any, {} as any, {} as any, { playAudio: vi.fn() } as any);

    expect(service).toBeTruthy();
  });
});
