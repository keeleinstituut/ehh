import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '@env/environment';
import { PrefixInterceptor } from './prefix.interceptor';

describe('PrefixInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PrefixInterceptor,
        { provide: HTTP_INTERCEPTORS, useClass: PrefixInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const interceptor: PrefixInterceptor = TestBed.inject(PrefixInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should prefix application api requests with the domain host', () => {
    httpClient.get('etLex/api/v1.0/pron/topics').subscribe();

    const request = httpTestingController.expectOne(`${environment.domainHost}/etLex/api/v1.0/pron/topics`);
    expect(request.request.method).toBe('GET');
  });

  it('should not prefix asset requests', () => {
    httpClient.get('assets/example.json').subscribe();

    const request = httpTestingController.expectOne('assets/example.json');
    expect(request.request.method).toBe('GET');
  });
});
