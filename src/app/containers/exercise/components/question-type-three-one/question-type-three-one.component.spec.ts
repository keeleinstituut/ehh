import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTypeThreeOneComponent } from './question-type-three-one.component';

describe('QuestionTypeThreeOneComponent', () => {
  let component: QuestionTypeThreeOneComponent;
  let fixture: ComponentFixture<QuestionTypeThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTypeThreeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypeThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
