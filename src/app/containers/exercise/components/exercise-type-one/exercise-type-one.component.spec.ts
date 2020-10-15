import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTypeOneComponent } from './exercise-type-one.component';

describe('ExerciseTypeOneComponent', () => {
  let component: ExerciseTypeOneComponent;
  let fixture: ComponentFixture<ExerciseTypeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTypeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
