import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTypeFourComponent } from './question-type-four.component';

describe('QuestionTypeFourComponent', () => {
  let component: QuestionTypeFourComponent;
  let fixture: ComponentFixture<QuestionTypeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTypeFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
