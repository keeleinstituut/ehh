import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTypeThreeComponent } from './question-type-three.component';

describe('QuestionTypeThreeComponent', () => {
  let component: QuestionTypeThreeComponent;
  let fixture: ComponentFixture<QuestionTypeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTypeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
