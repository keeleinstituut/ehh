import { Provider } from '@angular/core';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { vi } from 'vitest';

export const EMPTY_OPTIONS_BASE64 = 'W10=';

export function createQuestionData(overrides: Record<string, unknown> = {}): any {
  return {
    directive: '',
    options: EMPTY_OPTIONS_BASE64,
    etalon_img: '',
    etalon_wav: '',
    etalon_text: '',
    etalon_mictime: null,
    img: '',
    type: 'TYPE3',
    ...overrides,
  };
}

export function createQuestionOption(overrides: Record<string, unknown> = {}): any {
  return {
    id: 1,
    text: 'Test',
    img: '',
    wav: '',
    iscorrect: 0,
    selected: false,
    ...overrides,
  };
}

export function provideActivatedRouteParamMap(
  params: Record<string, string | number>,
  snapshotData?: Record<string, unknown>,
): Provider {
  const routeParams = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  );

  return {
    provide: ActivatedRoute,
    useValue: {
      paramMap: of(convertToParamMap(routeParams)),
      ...(snapshotData ? { snapshot: { data: snapshotData } } : {}),
    },
  };
}

export function provideActivatedRouteParams(params: Record<string, unknown>): Provider {
  return {
    provide: ActivatedRoute,
    useValue: {
      params: of(params),
    },
  };
}

export function createRouterSpy(
  methods: Array<keyof Router & string> = ['navigate'],
  properties: Record<string, unknown> = {},
): Router & Record<string, unknown> {
  const spy = Object.fromEntries(methods.map((method) => [method, vi.fn()])) as Router & Record<string, unknown>;
  return Object.assign(spy, properties);
}

export function createExerciseServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    check: EMPTY,
    decodeQuestionOptions: vi.fn().mockReturnValue([]),
    playEtalonSound: vi.fn().mockResolvedValue(undefined),
    setQuestionOptions: vi.fn().mockReturnValue([]),
    setGaps: vi.fn().mockReturnValue([]),
    getReplacerElement: vi.fn(),
    createEHHComponent: vi.fn(),
    checkType3Gaps: vi.fn().mockReturnValue(true),
    trimGapValue: vi.fn().mockImplementation((value: string) => value),
    ...overrides,
  };
}

export function createSoundServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    getUserMediaDevices: vi.fn(),
    recordAudio: vi.fn(),
    playAudio: vi.fn(),
    ...overrides,
  };
}

export function createStatesServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    appStates: of({ currentTopic: null, topicsList: { items: [] } }),
    currentQuestions: of(null),
    question: of(null),
    setCurrentQuestions: vi.fn(),
    setCurrentQuestion: vi.fn(),
    ...overrides,
  };
}

export function createFacadeMock(overrides: Record<string, unknown> = {}): any {
  return {
    fetchTopics: vi.fn(),
    fetchTopicInfo: vi.fn(),
    getTopicIntroComponent: vi.fn().mockReturnValue(null),
    getExerciseQuestions: vi.fn(),
    setCurrentQuestionsSessionStorage: vi.fn(),
    getQuestion: vi.fn(),
    getQuestionComponent: vi.fn(),
    checkQuestion: vi.fn(),
    sendAnswer: vi.fn(),
    getCurrentExerciseId: vi.fn().mockReturnValue(null),
    setExerciseDone: vi.fn(),
    clearCurrentQuestionsSessionStorage: vi.fn(),
    ...overrides,
  };
}

export function createUrlServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    previousUrl$: of(null),
    setPreviousUrl: vi.fn(),
    ...overrides,
  };
}
