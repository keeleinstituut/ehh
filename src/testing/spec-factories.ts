import { Provider } from '@angular/core';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { EMPTY, of } from 'rxjs';

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
): jasmine.SpyObj<Router> {
  return jasmine.createSpyObj<Router>('Router', methods, properties as any);
}

export function createExerciseServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    check: EMPTY,
    decodeQuestionOptions: jasmine.createSpy('decodeQuestionOptions').and.returnValue([]),
    playEtalonSound: jasmine.createSpy('playEtalonSound').and.resolveTo(),
    setQuestionOptions: jasmine.createSpy('setQuestionOptions').and.returnValue([]),
    setGaps: jasmine.createSpy('setGaps').and.returnValue([]),
    getReplacerElement: jasmine.createSpy('getReplacerElement'),
    createEHHComponent: jasmine.createSpy('createEHHComponent'),
    checkType3Gaps: jasmine.createSpy('checkType3Gaps').and.returnValue(true),
    trimGapValue: jasmine.createSpy('trimGapValue').and.callFake((value: string) => value),
    ...overrides,
  };
}

export function createSoundServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    getUserMediaDevices: jasmine.createSpy('getUserMediaDevices'),
    recordAudio: jasmine.createSpy('recordAudio'),
    playAudio: jasmine.createSpy('playAudio'),
    ...overrides,
  };
}

export function createStatesServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    appStates: of({ currentTopic: null, topicsList: { items: [] } }),
    currentQuestions: of(null),
    question: of(null),
    setCurrentQuestions: jasmine.createSpy('setCurrentQuestions'),
    setCurrentQuestion: jasmine.createSpy('setCurrentQuestion'),
    ...overrides,
  };
}

export function createFacadeMock(overrides: Record<string, unknown> = {}): any {
  return {
    fetchTopics: jasmine.createSpy('fetchTopics'),
    fetchTopicInfo: jasmine.createSpy('fetchTopicInfo'),
    getTopicIntroComponent: jasmine.createSpy('getTopicIntroComponent').and.returnValue(null),
    getExerciseQuestions: jasmine.createSpy('getExerciseQuestions'),
    setCurrentQuestionsSessionStorage: jasmine.createSpy('setCurrentQuestionsSessionStorage'),
    getQuestion: jasmine.createSpy('getQuestion'),
    getQuestionComponent: jasmine.createSpy('getQuestionComponent'),
    checkQuestion: jasmine.createSpy('checkQuestion'),
    sendAnswer: jasmine.createSpy('sendAnswer'),
    getCurrentExerciseId: jasmine.createSpy('getCurrentExerciseId').and.returnValue(null),
    setExerciseDone: jasmine.createSpy('setExerciseDone'),
    clearCurrentQuestionsSessionStorage: jasmine.createSpy('clearCurrentQuestionsSessionStorage'),
    ...overrides,
  };
}

export function createUrlServiceMock(overrides: Record<string, unknown> = {}): any {
  return {
    previousUrl$: of(null),
    setPreviousUrl: jasmine.createSpy('setPreviousUrl'),
    ...overrides,
  };
}
