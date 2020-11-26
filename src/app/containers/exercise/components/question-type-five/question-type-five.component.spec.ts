import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTypeFiveComponent } from './question-type-five.component';

describe('QuestionTypeFiveComponent', () => {
  let component: QuestionTypeFiveComponent;
  let fixture: ComponentFixture<QuestionTypeFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTypeFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
