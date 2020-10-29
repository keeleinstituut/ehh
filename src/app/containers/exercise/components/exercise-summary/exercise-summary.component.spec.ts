import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSummaryComponent } from './exercise-summary.component';

describe('ExerciseFinishComponent', () => {
  let component: ExerciseSummaryComponent;
  let fixture: ComponentFixture<ExerciseSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
