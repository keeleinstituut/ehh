// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest';
import { ExerciseService } from './exercise.service';
import { ElementRef } from '@angular/core';

describe('ExerciseService', () => {
  it('should be created', () => {
    const service = new ExerciseService({} as any, {} as any, {} as any, { playAudio: vi.fn() } as any);

    expect(service).toBeTruthy();
  });

  it('should render gap placeholders without reinterpreting text as HTML', () => {
    const service = new ExerciseService({} as any, {} as any, {} as any, { playAudio: vi.fn() } as any);
    const element = document.createElement('div');
    element.textContent = 'Tere <img src=x onerror=alert(1)> __1__ maailm';

    const gaps = service.setGaps(new ElementRef(element));

    expect(gaps).toEqual([{ gapNumber: 1, gapId: 1, gapControlName: 'gapControl1' }]);
    expect(element.querySelector('img')).toBeNull();
    expect(element.querySelector('#replacer_1')).toBeTruthy();
    expect(element.textContent).toBe('Tere <img src=x onerror=alert(1)>maailm');
  });
});
