import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTypeTwoComponent } from './exercise-type-two.component';

describe('ExerciseTypeTwoComponent', () => {
  let component: ExerciseTypeTwoComponent;
  let fixture: ComponentFixture<ExerciseTypeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTypeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
