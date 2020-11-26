import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDirectiveComponent } from './question-directive.component';

describe('QuestionDirectiveComponent', () => {
  let component: QuestionDirectiveComponent;
  let fixture: ComponentFixture<QuestionDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
