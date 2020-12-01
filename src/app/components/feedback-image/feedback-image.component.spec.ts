import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackImageComponent } from './feedback-image.component';

describe('FeedbackImageComponent', () => {
  let component: FeedbackImageComponent;
  let fixture: ComponentFixture<FeedbackImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
